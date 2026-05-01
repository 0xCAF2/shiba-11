export enum Keyword {
  Variable = "var",
  Subscript = "sub",
}

export enum BinOpKeyword {
  Add = "+",
  Subtract = "-",
  Multiply = "*",
  Divide = "/",
  Power = "**",

  Modulo = "%",

  Equal = "===",
  NotEqual = "!==",
  LessThan = "<",
  LessThanOrEqual = "<=",
  GreaterThan = ">",
  GreaterThanOrEqual = ">=",

  And = "&&",
  Or = "||",
}

export type Keywords =
  | (typeof Keyword)[keyof typeof Keyword]
  | (typeof BinOpKeyword)[keyof typeof BinOpKeyword]
