import type { Statement } from "../runner"

export interface Store {
  get list(): Statement[] // A history list
  get code(): Statement[] // Code for the runner

  addToList(stmt: Statement): void
  move(stmt: Statement, toIndex?: number): void
}
