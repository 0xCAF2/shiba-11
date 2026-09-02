import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"

export class Print implements Component<string>, Action {
  render(): string {
    return "print"
  }

  execute(): void {
    // Implementation for the Action interface
  }
}
