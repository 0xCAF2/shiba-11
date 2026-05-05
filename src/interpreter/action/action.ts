import type { Runtime } from "../runtime"

export interface Action {
  execute(r: Runtime): void
}
