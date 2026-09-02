import { Keyword } from "../keyword"
import { Renderer } from "../renderer"
import { Print } from "./component/ja/print"
import { End } from "./component/ja/end"
import type { DummyResponder } from "./dummy-responder"
import { Editor } from "../../editor"

export class DummyRenderer extends Renderer<DummyResponder[]> {
  override get result(): DummyResponder[] {
    return []
  }

  override readonly editor = new Editor()

  constructor() {
    super(
      "[]",
      {
        [Keyword.Print]: (stmt) => {
          return new Print(this, stmt)
        },
        [Keyword.End]: () => {
          return new End(this) // Handle the end keyword
        },
      },
      {},
    )
  }
}
