import { buildEditor } from "./build-editor"

;(() => {
  const editorDiv = document.getElementById("editor")
  if (!editorDiv) return

  buildEditor(editorDiv)
})()
