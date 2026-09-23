import { BinOp, Keyword, type Expression, type Reference } from "../expression"
import type { Any, Ref } from "./json-element"
import { ExpressionList, type ExpressionTable } from "./expression-list"

export class ExpressionParser {
  private readonly table: ExpressionTable

  constructor(expressionList: ExpressionList) {
    this.table = expressionList.table
  }

  readExpr(elem: Any): Expression {
    if (Array.isArray(elem) && elem.length > 0) {
      if (Array.isArray(elem[0])) {
        return elem[0].map((e) => this.readExpr(e))
      }
      if (typeof elem[0] === "string") {
        const keyword = elem[0] as Keyword
        return this.table[keyword]?.(elem, this) ?? null
      }
      throw new Error(`Invalid expression: ${elem}`)
    }
    return elem
  }

  readRef(elem: Ref): Reference {
    const keyword = elem[0] as Keyword
    const ref = this.table[keyword]?.(elem, this) ?? null
    if (
      ref !== null &&
      typeof ref !== "number" &&
      typeof ref !== "string" &&
      typeof ref !== "boolean" &&
      !(ref instanceof BinOp) &&
      !Array.isArray(ref)
    ) {
      return ref
    }
    throw new Error(`Invalid reference: ${elem}`)
  }
}
