import {
  Keyword,
  Variable,
  type Expression,
  type Keywords,
} from "../expression"
import * as Elem from "./json-element"

export type ExpressionTable = Record<Keywords, (elem: Elem.Any) => Expression>

export class ExpressionList {
  private readonly _table: ExpressionTable

  constructor() {
    this._table = {
      [Keyword.Variable]: (elem) => {
        const name = (elem as Elem.Variable)[Elem.Index.VariableName]
        return new Variable(name)
      },
    }
  }

  get table(): ExpressionTable {
    return this._table
  }
}
