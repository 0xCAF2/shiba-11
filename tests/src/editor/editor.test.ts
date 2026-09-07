import { describe, test, expect } from "bun:test"
import { Editor } from "../../../src"

describe("Editor tests", () => {
  test("should create an editor instance", () => {
    const editor = new Editor("[]")
    expect(editor).toBeInstanceOf(Editor)
  })
})
