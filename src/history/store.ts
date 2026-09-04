import type { Statement } from "./statement"

export interface Store {
  append(stmt: Statement): void
}
