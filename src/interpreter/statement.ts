import type { Keyword } from "./action"

export type Statement = [number, Keyword, ...any[]]

export enum Index {
  Indent = 0,
  Keyword = 1,
  FirstArg = 2,
}
