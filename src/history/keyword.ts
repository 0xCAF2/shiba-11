export enum Keyword {
  Print = "print",
  End = "end",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
