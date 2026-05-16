import type { Renderer, TagBlock } from "../../interpreter"
import { h, type ComponentChildren } from "preact"

export class PreactRenderer implements Renderer<ComponentChildren> {
  createVNode(root: string | (() => string) | TagBlock): ComponentChildren {
    return typeof root === "string"
      ? root
      : typeof root === "function"
        ? root()
        : this.h(root)
  }

  h(t: TagBlock): ComponentChildren {
    return h(
      t.tag,
      {
        ...t.attributes.all,
        style: t.styles.all,
        ...t.eventHandlers.all,
      },
      ...t.children.map((child) => this.createVNode(child)),
    )
  }
}
