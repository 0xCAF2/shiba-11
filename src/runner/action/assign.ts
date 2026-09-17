import type { Action } from "../../interpreter/action"
import type { Expression, Reference } from "../../interpreter/expression"
import type { Runtime } from "../../interpreter/runtime"
import type { Keyword } from "../keyword"

export class Assign implements Action {
  constructor(
    public readonly ref: Reference,
    public readonly value: Expression,
  ) {}

  execute(r: Runtime<Keyword>): void {
    const resolvedValue = r.evaluate(this.value)
    this.ref.assign(r, resolvedValue)
  }
}
