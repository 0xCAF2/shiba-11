import type { Runtime } from "../runtime"

export interface Command {
  execute(r: Runtime): void
}
