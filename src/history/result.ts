import type { Statement } from "../interpreter"

export interface Result {
  append(stmt: Statement): void
}
