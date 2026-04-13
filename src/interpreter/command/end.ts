import type { Environment } from "../runtime/environment"
import type { Command } from "./command"
import { Keyword } from "./keyword"

export class End implements Command {
  readonly keyword = Keyword.End

  execute(env: Environment): void {}
}
