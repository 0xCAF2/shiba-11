import { Editor } from ".."
import type { Behavior } from "../behavior"
import { PreactRenderer } from "../renderer/preact/preact-renderer"
import { Keyword, type Statement } from "../runner"
import { Keyword as HistoryKeyword } from "../history"

export function buildEditor(editorDiv: HTMLElement) {
  if (!editorDiv) return

  function preactFactory(behavior: Behavior, stmts: Statement[]) {
    return new PreactRenderer(behavior, stmts)
  }
  const editor = new Editor(
    [[1, HistoryKeyword.Append, Keyword.Print, ["Hello, World.", "test"]]],
    { create: preactFactory },
  )
  editor.show(editorDiv)
}
