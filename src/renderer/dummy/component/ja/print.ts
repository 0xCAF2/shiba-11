import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { Expression } from "../../../../interpreter/expression"
import type { DummyResponder } from "../../dummy-responder"
import type { Renderer } from "../../.."

export class Print implements Component<DummyResponder>, Action {
  constructor(
    private readonly renderer: Renderer<DummyResponder[]>,
    public values: Expression[],
  ) {}

  render(): DummyResponder {
    return {
      click: () => {
        this.renderer.editor.setState("action", "print")
        return "print"
      },
    }
  }

  execute(): void {
    // Implementation for the Action interface
  }
}
