import type { Runtime } from "../runtime"
import type { Command } from "./command"

export class End implements Command {
  execute(r: Runtime) {}
}
