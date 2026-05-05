import type { Runtime } from "../runtime"
import { surroundWith } from "../web"
import type { Action } from "./action"

export abstract class Tag implements Action {
  public readonly keyword: string

  constructor(keyword: string) {
    this.keyword = keyword
  }

  execute(r: Runtime): void {
    surroundWith(this.keyword, r)
  }
}
