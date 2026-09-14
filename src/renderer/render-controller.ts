import type { Behavior } from "../behavior"

// T is the type of each renderer's output, e.g. ComponentChildren in Preact.
export interface RenderController<T> {
  get behavior(): Behavior
  get shouldRenderAsCode(): boolean
  appendLine(line: T): void
}
