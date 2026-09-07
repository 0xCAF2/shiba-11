import { describe, test, expect } from "bun:test"
import { History } from "../../../src/history"
import { Behavior } from "../../../src/behavior"
import { Keyword } from "../../../src/runner"

describe("Behavior Tests", () => {
  test("should append Print action", () => {
    const history = new History("[]")
    const behavior = new Behavior(history)
    behavior.appendPrint("Hello, World!")
    expect(history.result).toEqual([[1, Keyword.Print, ["Hello, World!"]]])
  })
})
