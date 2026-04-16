export enum Keyword {
  Variable = "var",
  Subscript = "sub",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
