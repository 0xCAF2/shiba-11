import type { Runtime } from "../runtime"
import type { Command } from "./command"

export class Clear implements Command {
  execute(r: Runtime) {
    r.envr.currentTag?.children.splice(0, r.envr.currentTag.children.length)
  }
}
