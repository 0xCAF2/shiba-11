import type { Statement } from "./statement"

export type Code<Keyword extends string> = string | Statement<Keyword>[]
