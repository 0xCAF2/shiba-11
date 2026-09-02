import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"

export class End implements Component<string>, Action {
  render(): string {
    return "end"
  }

  execute(): void {
    // Implementation for the Action interface
  }
}
