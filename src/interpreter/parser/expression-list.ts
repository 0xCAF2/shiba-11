import {
  Keyword,
  Subscript,
  Variable,
  type Expression,
  type Keywords,
} from "../expression"
import type { ExpressionParser } from "./expression-parser"
import * as Elem from "./json-element"

export type ExpressionTable = Record<
  Keywords,
  (elem: Elem.Any, parser: ExpressionParser) => Expression
>

export class ExpressionList {
  private readonly _table: ExpressionTable

  constructor() {
    this._table = {
      [Keyword.Variable]: (elem) => {
        const name = (elem as Elem.Variable)[Elem.Index.VariableName]
        return new Variable(name)
      },
      [Keyword.Subscript]: (elem, parser) => {
        const targetElem = (elem as Elem.Subscript)[Elem.Index.SubscriptTarget]
        const target = parser.readExpr(targetElem)
        const indexElem = (elem as Elem.Subscript)[Elem.Index.SubscriptIndex]
        const index = parser.readExpr(indexElem)
        return new Subscript(target, index)
      },
    }
  }

  get table(): ExpressionTable {
    return this._table
  }
}
