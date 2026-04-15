import type { Keyword } from "../expression/keyword"

export type Variable = [Keyword.Variable, string]
export type Any = Variable | string | boolean | null

export enum Index {
  Keyword = 0,

  VariableName = 1,
}
