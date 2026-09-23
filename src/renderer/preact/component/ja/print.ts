import { h, type ComponentChildren } from "preact"
import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { Expression } from "../../../../interpreter/expression"
import type { RenderController } from "../../../render-controller"
import type { Statement } from "../../../../runner"

export class Print implements Component<ComponentChildren>, Action {
  constructor(
    public readonly controller: RenderController<ComponentChildren>,
    public readonly statement: Statement,
    public readonly values: Expression[],
  ) {}

  draw(): ComponentChildren {
    return h(
      "p",
      null,
      "表示する(",
      h(
        "span",
        null,
        this.values
          .map((v) => {
            if (typeof v === "string") return `"${v}"`
            return v?.toString()
          })
          .join(", "),
      ),
      ")",
      !this.controller.shouldRenderAsCode &&
        h(
          "button",
          {
            onClick: () => {
              this.controller.behavior.move(this.statement)
            },
          },
          "+",
        ),
    )
  }

  execute(): void {
    this.controller.appendLine(this.draw())
  }
}
