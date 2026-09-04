export enum Keyword {
  Click = "click",
}

export type Keywords = (typeof Keyword)[keyof typeof Keyword]
