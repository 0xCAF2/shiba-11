import type { Behavior } from "../behavior"

// T is the type of each renderer's output, e.g. ComponentChildren in Preact.
export interface RenderController<T> {
  get behavior(): Behavior
  appendLine(line: T): void
}
