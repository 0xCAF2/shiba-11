import type { Expression } from "../expression"
import { Block, BlockExitReason, BlockType, type Runtime } from "../runtime"
import { requestUpdate } from "../web/request-update"
import type { Action } from "./action"

export class On implements Action {
  constructor(
    public readonly eventName: string,
    public readonly eventValue: Expression,
  ) {}

  execute(r: Runtime) {
    const tagBlock = r.envr.currentTag
    if (tagBlock === null) {
      throw new Error("The 'on' action must be used inside a tag block.")
    }
    // eventValue is evaluated here to capture the value at
    // the time of handler definition, not at the time of event firing.
    const evaluatedEventValue = r.evaluate(this.eventValue)

    const addr = r.envr.address
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
      r.pushBlock(block)
      const previousTag = r.envr.currentTag
      r.envr.currentTag = tagBlock
      r.envr.context.assign("eValue", evaluatedEventValue)
      while (r.hasNext()) {
        const stmt = r.next()
        const action = r.parse(stmt)
        if (action) {
          action.execute(r)
        }
      }
      r.envr.currentTag = previousTag
    })
  }
}
