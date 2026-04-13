import type { Command } from "./command"

export class P implements Command {
  public readonly keyword = "p"

  execute() {
    console.log("p")
  }
}
