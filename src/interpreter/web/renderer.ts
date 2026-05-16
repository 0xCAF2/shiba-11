import type { TagBlock } from "./tag-block"

export interface Renderer<T> {
  createVNode(root: string | (() => string) | TagBlock): T
}
