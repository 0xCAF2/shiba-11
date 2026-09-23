import type { Action } from "../../interpreter/action"
import type { Expression } from "../../interpreter/expression"
import type { Runtime } from "../../interpreter/runtime"
import type { Keyword } from "../keyword"
import type { Output } from "../output"

export class Print implements Action {
  constructor(
    public readonly output: Output,
    public readonly values: Expression[],
  ) {}

  execute(runtime: Runtime<Keyword>): void {
    const evaluatedValues = this.values.map((v) =>
      (runtime.evaluate(v) ?? "null").toString(),
    )
    const result = evaluatedValues.join(" ")

    this.output.write(result + "\n")
  }
}
