import {
  Assign,
  Break,
  Continue,
  Comment,
  Conditional,
  Div,
  Else,
  Clear,
  End,
  Html,
  Ifs,
  Keyword,
  P,
  Repeat,
  While,
  Style,
  StaticText,
  DynamicText,
  On,
  type Action,
  type Keywords,
} from "../action"
import type { ExpressionParser } from "./expression-parser"
import { Index, type Statement } from "../statement"

export type ActionTable<T extends string> = Record<
  T,
  (stmt: Statement, exprParser: ExpressionParser) => Action
>

export class ActionList {
  private readonly _table: ActionTable<Keywords>

  constructor() {
    this._table = {
      [Keyword.Comment]: (stmt) => new Comment(stmt[Index.FirstArg].toString()),
      [Keyword.Assign]: (stmt, exprParser) => {
        const ref = exprParser.readRef(stmt[Index.FirstArg])
        const expr = exprParser.readExpr(stmt[Index.FirstArg + 1])
        return new Assign(ref, expr)
      },
      [Keyword.Ifs]: () => new Ifs(),
      [Keyword.If]: (stmt, exprParser) =>
        new Conditional(exprParser.readExpr(stmt[Index.FirstArg])),
      [Keyword.ElseIf]: (stmt, exprParser) =>
        new Conditional(exprParser.readExpr(stmt[Index.FirstArg])),
      [Keyword.Else]: () => new Else(),
      [Keyword.Repeat]: (stmt, exprParser) => {
        const times = exprParser.readExpr(stmt[Index.FirstArg])
        return new Repeat(times)
      },
      [Keyword.While]: (stmt, exprParser) => {
        const condition = exprParser.readExpr(stmt[Index.FirstArg])
        return new While(condition)
      },
      [Keyword.Break]: () => new Break(),
      [Keyword.Continue]: () => new Continue(),
      [Keyword.Html]: () => new Html(),
      [Keyword.Div]: () => new Div(),
      [Keyword.P]: () => new P(),
      [Keyword.StaticText]: (stmt, exprParser) => {
        const content = exprParser.readExpr(stmt[Index.FirstArg])
        return new StaticText(content)
      },
      [Keyword.DynamicText]: (stmt, exprParser) => {
        const content = exprParser.readExpr(stmt[Index.FirstArg])
        return new DynamicText(content)
      },
      [Keyword.Clear]: () => {
        return new Clear()
      },
      [Keyword.Style]: (stmt, exprParser) => {
        return new Style(
          stmt[Index.FirstArg].toString(),
          exprParser.readExpr(stmt[Index.FirstArg + 1]),
        )
      },
      [Keyword.On]: (stmt, exprParser) => {
        const eventName = stmt[Index.FirstArg].toString()
        const eventValue = exprParser.readExpr(stmt[Index.FirstArg + 1])
        return new On(eventName, eventValue)
      },
      [Keyword.End]: () => new End(),
    }
  }

  get table(): ActionTable {
    return this._table
  }
}
