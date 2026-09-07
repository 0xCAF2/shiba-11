import { describe, test, expect } from "bun:test"
import { History } from "../../../src/history"
import { Behavior } from "../../../src/behavior"
import { Keyword } from "../../../src/runner"

describe("Behavior Tests", () => {
  test("should append and move a Print action", () => {
    const history = new History("[]")
    const behavior = new Behavior(history)
    const stmt = behavior.appendPrint("Hello, World!")
    expect(history.all).toEqual([stmt])

    behavior.move(stmt)
    expect(history.all).toEqual([])
    expect(history.result).toEqual([stmt, [1, Keyword.End]])
  })
})
