import type { Runtime } from "../runtime"
import type { Action } from "./action"

export class Clear implements Action {
  execute(r: Runtime) {
    r.envr.currentTag?.children.splice(0, r.envr.currentTag.children.length)
  }
}
