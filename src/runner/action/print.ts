import type { Action } from "../../interpreter/action"
import type { Expression } from "../../interpreter/expression"
import type { Runtime } from "../../interpreter/runtime"

export class Print implements Action {
  constructor(public readonly values: Expression[]) {}

  execute(runtime: Runtime): void {
    const evaluatedValues = this.values.map((v) =>
      (runtime.evaluate(v) ?? "null").toString(),
    )
    const output = evaluatedValues.join(" ")

    const print = runtime.envr.externalFunctions.get("print")
    if (print) {
      print(output)
    }
  }
}
