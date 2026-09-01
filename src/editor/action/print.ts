import type { Action } from "../../interpreter/action"
import type { Expression } from "../../interpreter/expression"
import type { Runtime } from "../../interpreter/runtime"

export class Append implements Action {
  constructor(public readonly values: Expression[]) {}

  execute(r: Runtime): void {}
}
