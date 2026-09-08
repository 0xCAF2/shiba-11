import { Interpreter } from "../interpreter"
import type { Keyword } from "./keyword"
import type { Behavior } from "../behavior"

// T is the type of each renderer's output, e.g. ComponentChildren in Preact.
export abstract class Drawer<T> extends Interpreter<T, Keyword> {
  abstract get behavior(): Behavior
  abstract appendLine(line: T): void
  abstract draw(): T
}
