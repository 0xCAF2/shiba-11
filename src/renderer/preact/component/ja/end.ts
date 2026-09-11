import { h, type ComponentChildren } from "preact"
import type { Action } from "../../../../interpreter/action"
import type { Runtime } from "../../../../interpreter/runtime"
import type { Keyword } from "../../../../runner"
import type { Component } from "../../../component"

export class End implements Component<ComponentChildren>, Action {
  draw(): ComponentChildren {
    return h("span", null, "プログラムの終わり")
  }

  execute(r: Runtime<Keyword>): void {}
}
