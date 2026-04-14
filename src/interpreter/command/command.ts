import type { Runtime } from "../runtime"

export interface Command {
  get keyword(): string
  execute(r: Runtime): void
}
