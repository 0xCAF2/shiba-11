import type { Action } from "../../interpreter/action"
import type { Runtime } from "../../interpreter/runtime"
import type { Statement } from "../../interpreter"
import { Keyword } from "../../interpreter/action"
import type { Any } from "../../interpreter/parser/json-element"

export class Print implements Action {
  constructor(public readonly values: Any[]) {}

  execute(runtime: Runtime): void {
    const output = this.values.join(" ")
    console.log(output)
    const history = runtime.envr.context.lookup("history") as Statement[]
    history.push([1, Keyword.Print, this.values])
  }
}
