import type { Action } from "../action"
import { Index, type Statement } from "../statement"
import type { ActionTable } from "./action-list"
import { ExpressionParser } from "./expression-parser"
import type { ExpressionTable } from "./expression-list"

export class StatementParser<T extends string> {
  private readonly exprParser: ExpressionParser
  private readonly table: ActionTable<T>

  constructor(actionTable: ActionTable<T>, exprTable: ExpressionTable) {
    this.table = actionTable
    this.exprParser = new ExpressionParser(exprTable)
  }

  parse(stmt: Statement<T>): Action | null {
    const keyword = stmt[Index.Keyword]
    return this.table[keyword]?.(stmt, this.exprParser) ?? null
  }
}
