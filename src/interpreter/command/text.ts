import type { Expression } from "../expression"
import type { Environment } from "../runtime"
import type { Command } from "./command"
import { Keyword } from "./keyword"

export class Text implements Command {
  public readonly keyword = Keyword.Text

  constructor(public readonly content: Expression) {}

  execute(env: Environment) {
    console.log(env.evaluate(this.content))
  }
}
