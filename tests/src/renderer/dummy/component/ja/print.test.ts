import { describe, test, expect } from "bun:test"
import { Print } from "../../../../../../src/renderer/dummy/component/ja/print"
import { DummyRenderer } from "../../../../../../src/renderer/dummy/dummy-renderer"

describe("Print", () => {
  test("should respond with dummy click", () => {
    const dummyRenderer = new DummyRenderer()
    const printComponent = new Print(dummyRenderer, [])
    const result = printComponent.render()
    expect(result.click()).toBe("print")
    expect(dummyRenderer.editor.getState("action")).toBe("print")
  })
})
