import type { Expression } from "../expression"
import type { Runtime } from "../runtime"
import type { Command } from "./command"
import { Keyword } from "./keyword"

export class Style implements Command {
  public readonly keyword = Keyword.Style

  constructor(
    public readonly name: string,
    public readonly value: Expression,
  ) {}

  execute(r: Runtime): void {
    const styleValue = r.evaluate(this.value) as string
    r.envr.currentTag.styles.setStyle(this.name, styleValue)
  }
}
