import type { Runtime } from "../runtime"
import { surroundWith } from "../web"
import type { Command } from "./command"

export abstract class Tag implements Command {
  public readonly keyword: string

  constructor(keyword: string) {
    this.keyword = keyword
  }

  execute(r: Runtime): void {
    surroundWith(this.keyword, r)
  }
}
