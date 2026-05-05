import type { Action } from "../action"
import { Index, type Statement } from "../statement"
import type { ActionList, ActionTable } from "./action-list"
import { ExpressionParser } from "./expression-parser"
import type { ExpressionList } from "./expression-list"

export class StatementParser {
  private readonly exprParser: ExpressionParser
  private readonly table: ActionTable

  constructor(cmdList: ActionList, exprList: ExpressionList) {
    this.table = cmdList.table
    this.exprParser = new ExpressionParser(exprList)
  }

  parse(stmt: Statement): Action | null {
    const keyword = stmt[Index.Keyword]
    return this.table[keyword]?.(stmt, this.exprParser) ?? null
  }
}
