import { Block, BlockExitReason, BlockType, type Runtime } from "../runtime"
import { requestUpdate } from "../web/request-update"
import type { Action } from "./action"

export class On implements Action {
  constructor(public readonly eventName: string) {}

  execute(runtime: Runtime) {
    const tagBlock = runtime.envr.currentTag
    if (tagBlock === null) {
      throw new Error("The 'on' command must be used inside a tag block.")
    }

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
      while (runtime.hasNext()) {
        const stmt = runtime.next()
        const cmd = runtime.parse(stmt)
        if (cmd) {
          cmd.execute(runtime)
        }
      }
      runtime.envr.currentTag = previousTag
    })
  }
}
