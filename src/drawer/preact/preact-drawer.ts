import { type ComponentChildren, h } from "preact"
import { Drawer } from "../drawer"
import type { Behavior } from "../../behavior"
import { Print } from "./component/ja/print"
import { Keyword } from "../../interpreter/action"
import { End } from "./component/ja/end"

export class PreactDrawer extends Drawer<ComponentChildren> {
  private readonly _lines: ComponentChildren[] = []

  constructor(
    public readonly behavior: Behavior,
    code: string,
  ) {
    super(
      code,
      {
        [Keyword.Print]: () => {
          return new Print(this, ["Hello, World."])
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {},
    )
  }

  override get result(): ComponentChildren {
    return h("<>", null, ...this._lines)
  }

  override appendLine(line: ComponentChildren): void {
    this._lines.push(line)
  }

  override draw(): ComponentChildren {
    return this.result
  }
}
