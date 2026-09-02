import { describe, test, expect } from "bun:test"
import { Print } from "../../../../../../src/renderer/dummy/component/ja/print"

describe("Print", () => {
  test("render() should return 'print'", () => {
    const printComponent = new Print()
    const result = printComponent.render()
    expect(result.click()).toBe("print")
  })
})
