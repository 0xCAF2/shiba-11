import type { Expression } from "../expression"
import { Block, BlockExitReason, BlockType, type Runtime } from "../runtime"
import { requestUpdate } from "../web/request-update"
import type { Action } from "./action"

export class On implements Action {
  constructor(
    public readonly eventName: string,
    public readonly eventValue: Expression,
  ) {}

  execute(runtime: Runtime) {
    const tagBlock = runtime.envr.currentTag
    if (tagBlock === null) {
      throw new Error("The 'on' action must be used inside a tag block.")
    }
    // eventValue is evaluated here to capture the value at
    // the time of handler definition, not at the time of event firing.
    const evaluatedEventValue = runtime.evaluate(this.eventValue)

    const addr = runtime.envr.address
    tagBlock.eventHandlers.addHandler(this.eventName, () => {
      const block = new Block(
        BlockType.Handler,
        addr,
        () => true,
        () => {
          requestUpdate()
          return BlockExitReason.EndHandler
        },
      )
      runtime.pushBlock(block)
      const previousTag = runtime.envr.currentTag
      runtime.envr.currentTag = tagBlock
      runtime.envr.context.assign("eValue", evaluatedEventValue)
      while (runtime.hasNext()) {
        const stmt = runtime.next()
        const action = runtime.parse(stmt)
        if (action) {
          action.execute(runtime)
        }
      }
      runtime.envr.currentTag = previousTag
    })
  }
}
