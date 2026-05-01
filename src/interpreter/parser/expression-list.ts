import {
  Keyword,
  Subscript,
  Variable,
  type Expression,
  type Keywords,
} from "../expression"
import { BinOp } from "../expression/bin-op"
import { BinOpKeyword } from "../expression/keyword"
import type { ExpressionParser } from "./expression-parser"
import * as Elem from "./json-element"

export type ExpressionTable = Record<
  Keywords,
  (elem: Elem.Any, parser: ExpressionParser) => Expression
>

const binOpParser = (elem: Elem.Any, parser: ExpressionParser): BinOp => {
  const op = (elem as Elem.BinOp)[Elem.Index.Keyword]
  const left = parser.readExpr((elem as Elem.BinOp)[Elem.Index.BinOpLeft])
  const right = parser.readExpr((elem as Elem.BinOp)[Elem.Index.BinOpRight])
  return new BinOp(op, left, right)
}

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
      [BinOpKeyword.Add]: binOpParser,
      [BinOpKeyword.Subtract]: binOpParser,
      [BinOpKeyword.Multiply]: binOpParser,
      [BinOpKeyword.Divide]: binOpParser,
      [BinOpKeyword.Power]: binOpParser,
    }
  }

  get table(): ExpressionTable {
    return this._table
  }
}
