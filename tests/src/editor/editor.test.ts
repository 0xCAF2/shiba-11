import { describe, test, expect } from "bun:test"
import type { Statement } from "../../../src/runner"
import { Editor } from "../../../src"
import { Keyword } from "../../../src/runner"

describe("Editor tests", () => {
  test("should create an editor instance", () => {
    const editor = new Editor("[]")
    expect(editor).toBeInstanceOf(Editor)
  })

  test("should add and move a statement", () => {
    const editor = new Editor("[]")
    const stmt: Statement = [1, Keyword.Print, ["Hello, World."]]
    editor.addToList(stmt)
    expect(editor.list).toContain(stmt)
    editor.move(stmt)
    expect(editor.code).toContain(stmt)
    expect(editor.list).not.toContain(stmt)
  })
})
