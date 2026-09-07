import type { Statement } from "../runner"

export interface List {
  add(stmt: Statement): void
  get all(): Statement[]
}
