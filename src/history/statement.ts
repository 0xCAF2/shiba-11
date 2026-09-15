import type { Keyword } from "./keyword"

export type Statement = [number, Keyword, ...any]

export enum Index {
  Indent = 0,
  HistoryKeyword = 1,
  FirstArg = 2,
  SecondArg = 3,
}
