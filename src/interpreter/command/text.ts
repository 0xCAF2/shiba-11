import type { Command } from "./command"
import type { Expression } from "../expression"
import type { Runtime } from "../runtime"
import { Keyword } from "./keyword"

export class Text implements Command {
  public readonly keyword = Keyword.Text

  constructor(public readonly content: Expression) {}

  execute(r: Runtime) {
    r.env.currentTag?.children.push(r.evaluate(this.content))
  }
}
