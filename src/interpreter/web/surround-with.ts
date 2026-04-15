import { BlockExitReason, type Runtime } from "../runtime"
import { TagBlock } from "./tag-block"

export function surroundWith(tag: string, r: Runtime) {
  const parentTag = r.env.currentTag
  const addr = r.env.address

  const block = new TagBlock(
    tag,
    r.env.address,
    () => {
      r.env.currentTag = block
      return true
    },
    () => {
      const vnode = block.createVNode()
      if (parentTag) {
        parentTag.children.push(vnode)
        r.env.currentTag = parentTag!
      } else {
        const root = new TagBlock(
          "div",
          addr,
          () => true,
          () => BlockExitReason.Shift,
        )
        root.children.push(vnode)
        r.env.currentTag = root
      }
      return BlockExitReason.Shift
    },
  )
  r.pushBlock(block)
}
