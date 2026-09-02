import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { DummyResponder } from "../../dummy-responder"

export class End implements Component<DummyResponder>, Action {
  render(): DummyResponder {
    return {
      click: () => {
        return "end"
      },
    }
  }

  execute(): void {
    // Implementation for the Action interface
  }
}
