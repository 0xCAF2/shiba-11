import { End, Keyword, P, Text, type Command, type Keywords } from "../command"
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
      [Keyword.P]: (stmt, exprParser) => new P(),
      [Keyword.Text]: (stmt, exprParser) => {
        const content = exprParser.readExpr(stmt[Index.FirstArg])
        return new Text(content)
      },
      [Keyword.End]: (stmt, exprParser) => new End(),
    }
  }

  get table(): CommandTable {
    return this._table
  }
}
