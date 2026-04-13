export enum Keyword {
  P = "p",

  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
