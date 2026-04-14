import type { Command } from "../command"
import { Index, type Statement } from "../statement"
import type { CommandList, CommandTable } from "./command-list"
import { ExpressionParser } from "./expression-parser"
import type { ExpressionList, ExpressionTable } from "./expression-list"

export class StatementParser {
  private readonly exprParser: ExpressionParser
  private readonly table: CommandTable

  constructor(cmdList: CommandList, exprList: ExpressionList) {
    this.table = cmdList.table
    this.exprParser = new ExpressionParser(exprList)
  }

  parse(stmt: Statement): Command | null {
    const keyword = stmt[Index.Keyword]
    return this.table[keyword]?.(stmt, this.exprParser) ?? null
  }
}
