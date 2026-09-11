import { h, type ComponentChildren } from "preact"
import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { Renderer } from "../../.."

export class End implements Component<ComponentChildren>, Action {
  constructor(public readonly renderer: Renderer<ComponentChildren>) {}

  draw(): ComponentChildren {
    return h("p", null, "プログラムの終わり")
  }

  execute(): void {
    this.renderer.appendLine(this.draw())
  }
}
