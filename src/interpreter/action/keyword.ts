export enum Keyword {
  Comment = "#",

  Assign = "=",

  Ifs = "ifs",
  If = "if",
  ElseIf = "else_if",
  Else = "else",

  Repeat = "repeat",

  Break = "break",
  Continue = "continue",

  Html = "html",
  Div = "div",
  P = "p",
  StaticText = "static_text",
  DynamicText = "dynamic_text",
  Clear = "clear",
  Style = "style",
  On = "on",

  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
