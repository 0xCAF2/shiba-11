import type { Runtime } from "../runtime"
import type { Command } from "./command"

export class P implements Command {
  public readonly keyword = "p"

  execute(r: Runtime) {
    console.log("p")
  }
}
