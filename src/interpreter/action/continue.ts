import { BlockType, type Runtime } from "../runtime"
import type { Action } from "./action"

export class Continue implements Action {
  execute(r: Runtime): void {
    while (true) {
      const block = r.envr.blocks.at(-1)
      if (!block) {
        break
      }

      if (block.type === BlockType.Loop) {
        r.envr.blocks.pop()
        // Re-enter the block for the next iteration
        block.didExit()
        return
      }
      if (block.type === BlockType.Conditional) {
        r.envr.blocks.pop()
        continue
      }
      // Throwing an error here would interrupt the editor.
      // throw new Error("Invalid block type for continue: " + block.type)
      return
    }
  }
}
