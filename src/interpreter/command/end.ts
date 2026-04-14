import type { Runtime } from "../runtime"
import type { Command } from "./command"
import { Keyword } from "./keyword"

export class End implements Command {
  readonly keyword = Keyword.End

  execute(r: Runtime) {}
}
