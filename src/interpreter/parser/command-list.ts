import {
  Comment,
  Div,
  End,
  Html,
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
