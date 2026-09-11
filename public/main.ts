import { Editor } from "../src"

;(() => {
  const editorDiv = document.getElementById("editor")
  if (!editorDiv) return
  const editor = new Editor()
  editor.show(editorDiv)
})()
