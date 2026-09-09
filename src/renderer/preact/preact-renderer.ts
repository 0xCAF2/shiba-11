import { type ComponentChildren, h, render } from "preact"
import type { Renderer } from "../renderer"
import type { Behavior } from "../../behavior"
import { Print } from "./component/ja/print"
import { Keyword } from "../../interpreter/action"
import { End } from "./component/ja/end"
import { Interpreter } from "../../interpreter"

export class PreactRenderer
  extends Interpreter<ComponentChildren, Keyword>
  implements Renderer<ComponentChildren>
{
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

  appendLine(line: ComponentChildren): void {
    this._lines.push(line)
  }

  render(parent: HTMLElement): void {
    render(this.result, parent)
  }
}
