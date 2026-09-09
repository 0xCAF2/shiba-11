import type { ComponentChildren } from "preact"
import type { Action } from "../../../../interpreter/action"
import type { Runtime } from "../../../../interpreter/runtime"
import type { Component } from "../../../component"

export class End implements Component<ComponentChildren>, Action {
  render(): ComponentChildren {
    return <span>プログラムの終わり</span>
  }

  execute(r: Runtime): void {}
}
