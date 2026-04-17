import type { Expression } from "../expression"
import { Block, BlockExitReason, BlockType, type Runtime } from "../runtime"
import type { Command } from "./command"

export class Conditional implements Command {
  constructor(public readonly condition: Expression) {}

  execute(r: Runtime): void {
    const block = new Block(
      BlockType.Conditional,
      r.envr.address,
      () => {
        const conditionValue = r.evaluate(this.condition)
        return conditionValue ? true : false
      },
      // Shift2 to skip the "else" or "else if" block if the condition is true
      () => BlockExitReason.Shift2,
    )
    r.pushBlock(block)
  }
}

export class Ifs implements Command {
  execute(r: Runtime): void {
    const block = new Block(
      BlockType.Conditional,
      r.envr.address,
      () => true,
      () => BlockExitReason.Shift,
    )
    r.pushBlock(block)
  }
}

export class Else implements Command {
  execute(r: Runtime): void {
    const block = new Block(
      BlockType.Conditional,
      r.envr.address,
      () => true,
      () => BlockExitReason.Shift2,
    )
    r.pushBlock(block)
  }
}
