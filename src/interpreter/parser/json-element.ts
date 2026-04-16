import type { Keyword } from "../expression/keyword"

export type Variable = [Keyword.Variable, string]
export type Subscript = [Keyword.Subscript, Ref, Any]
export type Any = Variable | Subscript | string | boolean | null
export type Ref = Variable | Subscript

export enum Index {
  Keyword = 0,

  VariableName = 1,

  SubscriptTarget = 1,
  SubscriptIndex = 2,
}
