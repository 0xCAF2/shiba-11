import { BlockExitReason, type Runtime } from "../runtime"
import { TagBlock } from "./tag-block"

export function surroundWith(tag: string, r: Runtime) {
  const parentTag = r.envr.currentTag

  const block = new TagBlock(
    tag,
    r.envr.address,
    () => {
      r.envr.currentTag = block
      return true
    },
    () => {
      const vnode = block.createVNode()
      parentTag.children.push(vnode)
      r.envr.currentTag = parentTag
      return BlockExitReason.Shift
    },
  )
  r.pushBlock(block)
}
