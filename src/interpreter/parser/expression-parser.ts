import { BinOp, type Expression, type Reference } from "../expression"
import type { Any, Ref } from "./json-element"
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

  readRef(elem: Ref): Reference {
    const keyword = elem[0]
    const ref = this.table[keyword]?.(elem, this) ?? null
    if (
      ref !== null &&
      typeof ref !== "number" &&
      typeof ref !== "string" &&
      typeof ref !== "boolean" &&
      !(ref instanceof BinOp)
    ) {
      return ref
    }
    throw new Error(`Invalid reference: ${elem}`)
  }
}
