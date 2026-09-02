import type { Renderer } from "../../.."
import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { DummyResponder } from "../../dummy-responder"

export class End implements Component<DummyResponder>, Action {
  constructor(private readonly renderer: Renderer<DummyResponder[]>) {}

  render(): DummyResponder {
    return {
      click: () => {
        return "プログラムの終わり"
      },
    }
  }

  execute(): void {
    // Implementation for the Action interface
  }
}
