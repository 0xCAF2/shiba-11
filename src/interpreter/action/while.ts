import type { Expression } from "../expression"
import { Block, BlockExitReason, BlockType, Runtime } from "../runtime"
import type { Action } from "./action"

export class While implements Action {
  constructor(public readonly condition: Expression) {}

  execute(r: Runtime): void {
    const block = new Block(
      BlockType.Loop,
      r.envr.address,
      () => {
        const conditionValue = r.evaluate(this.condition)
        if (typeof conditionValue === "boolean") {
          return conditionValue
        } else if (typeof conditionValue === "number") {
          return conditionValue !== 0
        } else if (typeof conditionValue === "string") {
          return conditionValue.length > 0
        } else {
          throw new Error(`Invalid while condition: ${conditionValue}`)
        }
      },
      () => {
        r.jumpTo(block.address)
        r.pushBlock(block) // Re-enter the block for the next iteration
        return BlockExitReason.Jump
      },
    )
    r.pushBlock(block)
  }
}
