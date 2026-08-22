import type { Action } from "../../interpreter/action"
import type { Expression } from "../../interpreter/expression"
import type { Runtime } from "../../interpreter/runtime"

export class Print implements Action {
  constructor(public readonly values: Expression[]) {}

  execute(runtime: Runtime): void {
    console.log(...this.values.map((v) => runtime.evaluate(v)).join(" "))
  }
}
