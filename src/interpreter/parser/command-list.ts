import {
  Assign,
  Comment,
  Conditional,
  Div,
  Else,
  End,
  Html,
  Ifs,
  Keyword,
  P,
  Style,
  Text,
  type Command,
  type Keywords,
} from "../command"
import type { ExpressionParser } from "./expression-parser"
import { Index, type Statement } from "../statement"

export type CommandTable = Record<
  Keywords,
  (stmt: Statement, exprParser: ExpressionParser) => Command
>

export class CommandList {
  private readonly _table: CommandTable

  constructor() {
    this._table = {
      [Keyword.Comment]: (stmt, exprParser) =>
        new Comment(stmt[Index.FirstArg].toString()),
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
      [Keyword.ForOf]: (stmt, exprParser) => {
        throw new Error("for of is not implemented yet")
      },
      [Keyword.Html]: () => new Html(),
      [Keyword.Div]: () => new Div(),
      [Keyword.P]: () => new P(),
      [Keyword.Text]: (stmt, exprParser) => {
        const content = exprParser.readExpr(stmt[Index.FirstArg])
        return new Text(content)
      },
      [Keyword.Style]: (stmt, exprParser) => {
        return new Style(
          stmt[Index.FirstArg].toString(),
          exprParser.readExpr(stmt[Index.FirstArg + 1]),
        )
      },
      [Keyword.End]: (stmt, exprParser) => new End(),
    }
  }

  get table(): CommandTable {
    return this._table
  }
}
