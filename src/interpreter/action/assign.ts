import { Variable, type Expression } from "../expression"
import type { Reference } from "../expression/reference"
import type { Runtime } from "../runtime"
import type { Action } from "./action"

export class Assign implements Action {
  constructor(
    public readonly ref: Reference,
    public readonly expr: Expression,
  ) {}

  execute(r: Runtime): void {
    const value = r.evaluate(this.expr)
    this.ref.assign(r, value)
  }
}
