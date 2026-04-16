export enum Keyword {
  Comment = "#",

  Html = "html",
  Div = "div",
  P = "p",
  Text = "text",
  Style = "style",

  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
