import type { Keywords } from "./keyword"

export type Statement = [number, Keywords, ...any]

export enum Index {
  Indent = 0,
  Keyword = 1,
  FirstArg = 2,
}
