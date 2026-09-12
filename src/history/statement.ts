import type { Keyword } from "../runner"
import type { Keyword as HistoryKeyword } from "./keyword"

export type Statement = [number, HistoryKeyword, Keyword, ...any]

export enum Index {
  Indent = 0,
  HistoryKeyword = 1,
  Keyword = 2,
  FirstArg = 3,
}
