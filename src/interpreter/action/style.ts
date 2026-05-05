import type { Expression } from "../expression"
import type { Runtime } from "../runtime"
import type { Action } from "./action"

export class Style implements Action {
  constructor(
    public readonly name: string,
    public readonly value: Expression,
  ) {}

  execute(r: Runtime): void {
    r.envr.currentTag.styles.setStyle(
      this.name,
      () => r.evaluate(this.value) as string,
    )
  }
}
