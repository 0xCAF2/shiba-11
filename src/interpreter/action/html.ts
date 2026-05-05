import { BlockExitReason, type Runtime } from "../runtime"
import { TagBlock } from "../web"
import type { Action } from "./action"

export class Html implements Action {
  execute(r: Runtime): void {
    const block = new TagBlock(
      "div",
      r.envr.address,
      () => {
        r.envr.currentTag = block
        return true
      },
      () => {
        return BlockExitReason.Shift
      },
    )
    r.pushBlock(block)
  }
}
