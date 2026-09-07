import type { Statement } from "../runner"

export interface Code {
  move(stmt: Statement): void
}
