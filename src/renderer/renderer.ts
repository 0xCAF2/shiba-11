import type { Statement } from "../../interpreter"

export interface Renderer<T> {
  show(stmt: Statement): T
  showResult(): T
}
