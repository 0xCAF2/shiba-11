import type { Statement } from "../runner"

export interface HistoryList {
  add(stmt: Statement): void
  get all(): Statement[]
}
