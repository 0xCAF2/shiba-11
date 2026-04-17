export enum Keyword {
  Variable = "var",
  Subscript = "sub",
}

export enum BinOpKeyword {
  Add = "+",
}

export type Keywords =
  | (typeof Keyword)[keyof typeof Keyword]
  | (typeof BinOpKeyword)[keyof typeof BinOpKeyword]
