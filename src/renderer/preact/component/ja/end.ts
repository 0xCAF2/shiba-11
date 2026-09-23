import { h, type ComponentChildren } from "preact"
import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { RenderController } from "../../../render-controller"

export class End implements Component<ComponentChildren>, Action {
  constructor(
    public readonly controller: RenderController<ComponentChildren>,
  ) {}

  draw(): ComponentChildren {
    return h("p", null, "プログラムの終わり")
  }

  execute(): void {
    this.controller.appendLine(this.draw())
  }
}
