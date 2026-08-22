import type { Action } from "../action"
import { Index, type Statement } from "../statement"
import type { ActionTable } from "./action-list"
import { ExpressionParser } from "./expression-parser"
import type { ExpressionTable } from "./expression-list"

export class StatementParser {
  private readonly exprParser: ExpressionParser
  private readonly table: ActionTable

  constructor(actionTable: ActionTable, exprTable: ExpressionTable) {
    this.table = actionTable
    this.exprParser = new ExpressionParser(exprTable)
  }

  parse(stmt: Statement): Action | null {
    const keyword = stmt[Index.Keyword]
    return this.table[keyword]?.(stmt, this.exprParser) ?? null
  }
}
