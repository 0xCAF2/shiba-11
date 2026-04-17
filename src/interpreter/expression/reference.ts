import type { Runtime } from "../runtime"
import type { Value } from "./value"

export interface Reference {
  assign(r: Runtime, value: Value): void
  evaluate(r: Runtime): Value
}
