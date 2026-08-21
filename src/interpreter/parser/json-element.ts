import type { BinOpKeyword, Keyword } from "../expression/keyword"

export type Variable = [Keyword.Variable, string]
export type Subscript = [Keyword.Subscript, Ref, Any]
export type Call = [Keyword.Call, string, Any[]]
export type Any =
  | Variable
  | Subscript
  | Call
  | BinOp
  | string
  | boolean
  | null
  | Any[]
export type Ref = Variable | Subscript
export type BinOp = [BinOpKeyword, Any, Any]

export const index = {
  keyword: 0,

  variableName: 1,

  subscriptTarget: 1,
  subscriptIndex: 2,

  callee: 1,
  callArgs: 2,

  binOpLeft: 1,
  binOpRight: 2,
}
