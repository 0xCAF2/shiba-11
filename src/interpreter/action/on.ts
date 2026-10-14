import type { Expression } from "../expression"
import { Variable } from "../expression"
import {
  Block,
  BlockExitReason,
  BlockType,
  HandlerScope,
  type Runtime,
} from "../runtime"
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
    const parentScope = r.envr.context

    const addr = r.envr.address
    tagBlock.eventHandlers.addHandler(this.eventName, () => {
      const block = new Block(
        BlockType.Handler,
        addr,
        () => true,
        () => {
          r.envr.switchContext(parentScope)
          r.dispatcher?.requestUpdate()
          return BlockExitReason.EndHandler
        },
      )
      r.pushBlock(block)
      const previousTag = r.envr.currentTag
      r.envr.currentTag = tagBlock
      const handlerScope = new HandlerScope(
        parentScope,
        this.eventValue instanceof Variable
          ? {
              name: this.eventValue.name,
              value: evaluatedEventValue,
            }
          : null,
      )
      r.envr.switchContext(handlerScope)
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
