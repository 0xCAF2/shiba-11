import { describe, expect, test } from "bun:test"
import { Editor } from "../../../src/editor/editor"

describe("Editor", () => {
  test("should create an Editor instance", () => {
    const editor = new Editor()
    expect(editor).toBeInstanceOf(Editor)
  })

  test("should have an empty initial state", () => {
    const editor = new Editor()
    expect(editor.result).toEqual([])
  })

  test("should allow appending state to the editor", () => {
    const editor = new Editor()
    editor.setState("test", 73)
    const state = editor.getState("test")
    expect(state).toBe(73)
  })
})
