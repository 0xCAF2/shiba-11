import type { Keyword } from "../interpreter/action"
import type { Keyword as HistoryKeyword } from "./keyword"

export type Statement = [number, HistoryKeyword, Keyword, ...any]

export enum Index {
  Indent = 0,
  KeywordForHistory = 1,
  Keyword = 2,
  FirstArg = 3,
}
