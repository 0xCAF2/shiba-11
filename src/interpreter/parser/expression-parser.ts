import type { Expression } from "../expression"
import type { Any } from "./json-element"
import { ExpressionList, type ExpressionTable } from "./expression-list"

export class ExpressionParser {
  private readonly table: ExpressionTable

  constructor(expressionList: ExpressionList) {
    this.table = expressionList.table
  }

  readExpr(elem: Any): Expression {
    if (elem instanceof Array) {
      const keyword = elem[0]
      return this.table[keyword]?.(elem) ?? null
    }
    return elem
  }
}
