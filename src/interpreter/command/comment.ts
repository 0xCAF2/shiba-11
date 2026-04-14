import type { Runtime } from "../runtime"
import type { Command } from "./command"
import { Keyword } from "./keyword"

export class Comment implements Command {
  public readonly keyword = Keyword.Comment

  constructor(public readonly content: string) {}

  execute(r: Runtime) {
    /* do nothing */
  }
}
