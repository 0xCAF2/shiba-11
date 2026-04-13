import type { Command } from "./command"

export class Environment {
  constructor(public readonly commands: Command[]) {}
}
