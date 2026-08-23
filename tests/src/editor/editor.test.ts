import { describe, expect, test } from "bun:test"
import { Editor } from "../../../src/editor/editor"

describe("Editor", () => {
  test("should create an Editor instance", () => {
    const code = "[]"
    const editor = new Editor(code)
    expect(editor).toBeInstanceOf(Editor)
  })
})
