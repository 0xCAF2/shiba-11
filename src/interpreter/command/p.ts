import type { Environment } from "../runtime/environment"
import type { Command } from "./command"

export class P implements Command {
  public readonly keyword = "p"

  execute(env: Environment) {
    console.log("p")
  }
}
