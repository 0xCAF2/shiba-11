import {
  Keyword,
  Subscript,
  Variable,
  BinOp,
  Call,
  BinOpKeyword,
  type Expression,
  type Keywords,
} from "../expression"
import type { ExpressionParser } from "./expression-parser"
import * as Elem from "./json-element"

export type ExpressionTable = Record<
  Keywords,
  (elem: Elem.Any, parser: ExpressionParser) => Expression
>

const binOpParser = (elem: Elem.Any, parser: ExpressionParser): BinOp => {
  const op = (elem as Elem.BinOp)[Elem.index.keyword] as BinOpKeyword
  const left = parser.readExpr((elem as Elem.BinOp)[Elem.index.binOpLeft]!)
  const right = parser.readExpr((elem as Elem.BinOp)[Elem.index.binOpRight]!)
  return new BinOp(op, left, right)
}

export class ExpressionList {
  private readonly _table: ExpressionTable

  constructor() {
    this._table = {
      [Keyword.Variable]: (elem) => {
        const name = (elem as Elem.Variable)[Elem.index.variableName]!
        return new Variable(name)
      },
      [Keyword.Subscript]: (elem, parser) => {
        const targetElem = (elem as Elem.Subscript)[Elem.index.subscriptTarget]!
        const target = parser.readExpr(targetElem)
        const indexElem = (elem as Elem.Subscript)[Elem.index.subscriptIndex]!
        const index = parser.readExpr(indexElem)
        return new Subscript(target, index)
      },
      [Keyword.Call]: (elem, parser) => {
        const callee = (elem as Elem.Call)[Elem.index.callee] as string
        const argsElem = (elem as Elem.Call)[Elem.index.callArgs] as Elem.Any[]
        const args = argsElem.map((arg) => parser.readExpr(arg))
        return new Call(callee, args)
      },
      [BinOpKeyword.Add]: binOpParser,
      [BinOpKeyword.Subtract]: binOpParser,
      [BinOpKeyword.Multiply]: binOpParser,
      [BinOpKeyword.Divide]: binOpParser,
      [BinOpKeyword.Power]: binOpParser,
      [BinOpKeyword.Modulo]: binOpParser,
      [BinOpKeyword.Equal]: binOpParser,
      [BinOpKeyword.NotEqual]: binOpParser,
      [BinOpKeyword.LessThan]: binOpParser,
      [BinOpKeyword.LessThanOrEqual]: binOpParser,
      [BinOpKeyword.GreaterThan]: binOpParser,
      [BinOpKeyword.GreaterThanOrEqual]: binOpParser,
      [BinOpKeyword.And]: binOpParser,
      [BinOpKeyword.Or]: binOpParser,
    }
  }

  get table(): ExpressionTable {
    return this._table
  }
}
