import type { TagBlock } from "./tag-block"

export type Getter<T> = { value: T }

export interface Renderer<T, U> {
  createVNode(root: string | (() => string) | TagBlock): T
  subscribeToUiChanges(): Getter<U>
  requestUpdate(): void
}
