import { type Runtime } from "../runtime"
import { surroundWith } from "../web"
import type { Command } from "./command"

export class P implements Command {
  public readonly keyword = "p"

  execute(r: Runtime) {
    surroundWith(this.keyword, r)
  }
}
