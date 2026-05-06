export enum Keyword {
  Comment = "#",

  Assign = "=",

  Ifs = "ifs",
  If = "if",
  ElseIf = "elif",
  Else = "else",

  Repeat = "re",

  Html = "h",
  Div = "div",
  P = "p",
  StaticText = "s",
  DynamicText = "d",
  Clear = "c",
  Style = ":",
  On = "on",

  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
