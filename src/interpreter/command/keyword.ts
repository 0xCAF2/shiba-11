export enum Keyword {
  Comment = "#",

  P = "p",
  Text = "text",

  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
