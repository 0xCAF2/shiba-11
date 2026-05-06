import type { Runtime } from "../runtime"
import type { Expression } from "./expression"
import type { Reference } from "./reference"
import type { Value } from "./value"

export class Subscript implements Reference {
  constructor(
    public readonly target: Expression,
    public readonly index: Expression,
  ) {}

  assign(r: Runtime, value: Value): void {
    const target = r.evaluate(this.target)
    if (Array.isArray(target)) {
      const idx = r.evaluate(this.index)
      if (typeof idx === "number") {
        target[idx] = value
      }
    } else if (target && typeof target === "object") {
      const key = r.evaluate(this.index)
      if (typeof key === "string") {
        target[key] = value
      }
    }
  }

  evaluate(r: Runtime): Value {
    const value = r.evaluate(this.target)
    if (typeof value === "string" || Array.isArray(value)) {
      const idx = r.evaluate(this.index)
      if (typeof idx === "number") {
        return value[idx] ?? null
      }
    } else if (value && typeof value === "object") {
      const key = r.evaluate(this.index)
      if (typeof key === "string") {
        return value[key] ?? null
      }
    }
    return null
  }
}
