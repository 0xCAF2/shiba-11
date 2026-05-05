import type { Keywords } from "./action"

export type Statement = [number, Keywords, ...any[]]

export enum Index {
  Indent = 0,
  Keyword = 1,
  FirstArg = 2,
}
