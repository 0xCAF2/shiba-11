import type { Runtime } from "../runtime"
import type { Expression } from "./expression"
import type { Value } from "./value"

export class Call {
  constructor(
    public readonly callee: string,
    public readonly args: Expression[],
  ) {}

  evaluate(r: Runtime): Value {
    const func = r.envr.context.lookup(this.callee)
    if (typeof func !== "function") {
      throw new Error(`'${this.callee}' is not a function`)
    }
    const argValues = this.args.map((arg) => r.evaluate(arg))
    return func(...argValues)
  }
}
