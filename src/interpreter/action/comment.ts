import type { Runtime } from "../runtime"
import type { Action } from "./action"

export class Comment implements Action {
  constructor(public readonly content: string) {}

  execute(r: Runtime) {
    /* do nothing */
  }
}
