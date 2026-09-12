import { Editor } from "../src"
import type { Behavior } from "../src/behavior"
import { PreactRenderer } from "../src/renderer/preact/preact-renderer"
import { Keyword, type Statement } from "../src/runner"
import { Keyword as HistoryKeyword } from "../src/history"

export function buildEditor(editorDiv: HTMLElement) {
  if (!editorDiv) return

  function preactFactory(behavior: Behavior, stmts: Statement[]) {
    return new PreactRenderer(behavior, stmts)
  }
  const editor = new Editor(
    [
      [1, HistoryKeyword.Append, Keyword.Print, ["Hello, World.", "test"]],
      [1, HistoryKeyword.End, Keyword.End],
    ],
    { create: preactFactory },
  )
  editor.show(editorDiv)
}
