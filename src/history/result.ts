import type { Statement } from "../runner"

export interface Result {
  write(stmt: Statement): void
}
