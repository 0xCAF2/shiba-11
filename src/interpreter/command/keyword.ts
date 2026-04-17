export enum Keyword {
  Comment = "#",

  Assign = "=",

  Ifs = "ifs",
  If = "if",
  ElseIf = "else if",
  Else = "else",

  Repeat = "repeat",

  Html = "html",
  Div = "div",
  P = "p",
  Text = "text",
  Style = "style",

  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
