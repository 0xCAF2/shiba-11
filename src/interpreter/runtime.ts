import type { Environment } from "./environment"

export class Runtime {
  constructor(private readonly environment: Environment) {}

  run() {}
}
