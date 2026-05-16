import type { Getter, Renderer, TagBlock } from "../../interpreter"
import { h, type ComponentChildren } from "preact"
import { signal } from "@preact/signals"

const counter = signal(0)

export class PreactRenderer implements Renderer<ComponentChildren, number> {
  createVNode(root: string | (() => string) | TagBlock): ComponentChildren {
    return typeof root === "string"
      ? root
      : typeof root === "function"
        ? root()
        : this.h(root)
  }

  subscribeToUiChanges(): Getter<number> {
    return counter
  }

  requestUpdate() {
    counter.value = (counter.value + 1) % 1000
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
