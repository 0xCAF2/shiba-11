import type { Runtime } from "../runtime"
import type { Action } from "./action"

export class End implements Action {
  execute(r: Runtime) {}
}
