import type { Expression } from "../expression"
import type { Runtime } from "../runtime"
import type { Command } from "./command"

export class Style implements Command {
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
