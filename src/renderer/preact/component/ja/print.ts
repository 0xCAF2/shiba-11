import { h, type ComponentChildren } from "preact"
import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { Expression } from "../../../../interpreter/expression"
import type { Renderer } from "../../.."

export class Print implements Component<ComponentChildren>, Action {
  constructor(
    public readonly renderer: Renderer<ComponentChildren>,
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
    )
  }

  execute(): void {
    this.renderer.appendLine(this.draw())
  }
}
