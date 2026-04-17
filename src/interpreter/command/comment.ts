import type { Runtime } from "../runtime"
import type { Command } from "./command"

export class Comment implements Command {
  constructor(public readonly content: string) {}

  execute(r: Runtime) {
    /* do nothing */
  }
}
