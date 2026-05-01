import type { Expression } from "../expression"
import { Block, BlockExitReason, BlockType, Runtime } from "../runtime"
import type { Command } from "./command"

export class Repeat implements Command {
  constructor(public readonly times: Expression) {}

  execute(r: Runtime): void {
    let counter = 0
    const timesValue = r.evaluate(this.times)
    if (typeof timesValue === "number") {
      counter = timesValue
    } else if (typeof timesValue === "string") {
      counter = parseInt(timesValue, 10)
    } else {
      throw new Error(`Invalid repeat times: ${timesValue}`)
    }

    if (
      !Number.isFinite(counter) ||
      !Number.isInteger(counter) ||
      counter < 0
    ) {
      return
    }

    const block = new Block(
      BlockType.Loop,
      r.envr.address,
      () => {
        if (counter > 0) {
          return true
        }
        return false
      },
      () => {
        counter--
        r.jumpTo(block.address)
        r.pushBlock(block) // Re-enter the block for the next iteration
        return BlockExitReason.Jump
      },
    )
    r.pushBlock(block)
  }
}
