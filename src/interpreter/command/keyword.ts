export enum Keyword {
  P = "p",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
