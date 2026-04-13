export enum Keyword {
  Variable = "var",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
