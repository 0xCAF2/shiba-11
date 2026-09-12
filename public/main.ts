import { buildEditor } from "../src/editor"

;(() => {
  const editorDiv = document.getElementById("editor")
  if (!editorDiv) return

  buildEditor(editorDiv)
})()
