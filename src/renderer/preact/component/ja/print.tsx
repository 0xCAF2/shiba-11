import type { ComponentChildren } from "preact"
import type { Action } from "../../../../interpreter/action"
import type { Component } from "../../../component"
import type { Runtime } from "../../../../interpreter/runtime"
import type { Expression } from "../../../../interpreter/expression"
import type { Keyword } from "../../../../runner"
import type { Renderer } from "../../.."

export class Print implements Component<ComponentChildren>, Action {
  constructor(
    public readonly renderer: Renderer<ComponentChildren>,
    public readonly values: Expression[],
  ) {}

  render(): ComponentChildren {
    return <span>{this.values.map((v) => v?.toString()).join(", ")}</span>
  }

  execute(r: Runtime<Keyword>): void {}
}
