import { BlockType, type Runtime } from "../runtime"
import type { Action } from "./action"

export class Continue implements Action {
  execute(r: Runtime): void {
    while (true) {
      const block = r.envr.blocks.at(-1)
      if (!block) {
        return
      }

      if (block.type === BlockType.Loop) {
        r.popBlock()
        return
      }
      if (block.type === BlockType.Conditional) {
        r.envr.blocks.pop()
        continue
      }
      r.popBlock()
      continue
    }
  }
}
