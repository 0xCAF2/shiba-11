import { type ComponentChildren, h } from "preact"
import { Renderer } from "../renderer"
import { Editor } from "../../editor"
import { Print } from "./component/ja/print"
import { Keyword } from "../../interpreter/action"
import { End } from "./component/ja/end"

export class PreactRenderer extends Renderer<ComponentChildren> {
  private readonly _result: ComponentChildren[] = []

  override readonly editor = new Editor()

  constructor(code: string) {
    super(
      code,
      {
        [Keyword.Print]: () => {
          return new Print([])
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {},
    )
  }

  override get result(): ComponentChildren {
    return this._result
  }
}
