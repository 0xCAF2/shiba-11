import type { Environment } from "../runtime/environment"

export interface Command {
  get keyword(): string
  execute(env: Environment): void
}
