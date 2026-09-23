import { Editor } from ".."
import type { Behavior } from "../behavior"
import { PreactRenderer } from "../renderer/preact/preact-renderer"
import { Keyword, type Statement } from "../runner"
import { Keyword as HistoryKeyword } from "../history"

export function buildEditor(editorDiv: HTMLElement) {
  if (!editorDiv) return

  function preactFactory(
    behavior: Behavior,
    isCodeRenderer: boolean,
    stmts: Statement[],
  ) {
    return new PreactRenderer(behavior, isCodeRenderer, stmts)
  }
  const editor = new Editor(
    [
      [1, HistoryKeyword.Append, Keyword.Print, ["Hello, World.", 0]],
      [1, HistoryKeyword.Append, Keyword.Print, ["Hello, World.", "test2"]],
    ],
    { create: preactFactory },
  )
  editor.show(editorDiv)
}
