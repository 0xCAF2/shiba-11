import type { Expression, Reference } from "../expression"
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
      return this.table[keyword]?.(elem, this) ?? null
    }
    return elem
  }

  readRef(elem: Any): Reference {
    if (elem instanceof Array) {
      const keyword = elem[0]
      const ref = this.table[keyword]?.(elem, this) ?? null
      return ref as Reference
    }
    throw new Error(`Expected reference, got ${elem}`)
  }
}
