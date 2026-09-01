export enum Keyword {
  Append = "append",
  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
