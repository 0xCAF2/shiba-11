import type { BinOp } from "./bin-op"
import type { Call } from "./call"
import type { Subscript } from "./subscript"
import type { Variable } from "./variable"

export type Expression =
  | string
  | boolean
  | null
  | Variable
  | Subscript
  | Call
  | BinOp
  | Expression[]

export type Reference = Variable | Subscript
