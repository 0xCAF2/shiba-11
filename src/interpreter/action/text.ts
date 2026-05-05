import type { Action } from "./action"
import type { Expression } from "../expression"
import type { Runtime } from "../runtime"

export class StaticText implements Action {
  constructor(public readonly content: Expression) {}

  execute(r: Runtime) {
    r.envr.currentTag?.children.push(r.evaluate(this.content)?.toString() ?? "")
  }
}

export class DynamicText implements Action {
  constructor(public readonly content: Expression) {}

  execute(r: Runtime) {
    r.envr.currentTag?.children.push(
      () => r.evaluate(this.content)?.toString() ?? "",
    )
  }
}
