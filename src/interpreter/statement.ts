export type Statement<Keyword extends string> = [number, Keyword, ...any[]]

export enum Index {
  Indent = 0,
  Keyword = 1,
  FirstArg = 2,
}
