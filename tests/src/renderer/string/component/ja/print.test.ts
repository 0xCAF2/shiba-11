import { describe, test, expect } from "bun:test"
import { Print } from "../../../../../../src/renderer/string/component/ja/print"

describe("Print", () => {
  test("render() should return 'print'", () => {
    const printComponent = new Print()
    expect(printComponent.render()).toBe("print")
  })
})
