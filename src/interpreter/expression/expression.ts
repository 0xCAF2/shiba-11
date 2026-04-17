import type { BinOp } from "./bin-op"
import type { Subscript } from "./subscript"
import type { Variable } from "./variable"

export type Expression = string | boolean | null | Variable | Subscript | BinOp
