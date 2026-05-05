import type { BinOpKeyword, Keyword } from "../expression/keyword"

export type Variable = [Keyword.Variable, string]
export type Subscript = [Keyword.Subscript, Ref, Any]
export type Any =
  | Variable
  | Subscript
  | BinOp
  | string
  | boolean
  | null
  | [...Any[]]
export type Ref = Variable | Subscript
export type BinOp = [BinOpKeyword, Any, Any]

export enum Index {
  Keyword = 0,

  VariableName = 1,

  SubscriptTarget = 1,
  SubscriptIndex = 2,

  BinOpLeft = 1,
  BinOpRight = 2,
}
