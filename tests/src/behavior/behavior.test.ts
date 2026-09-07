import { describe, test, expect } from "bun:test"
import { History } from "../../../src/history"
import { Behavior } from "../../../src/behavior"
import { Keyword, type Statement } from "../../../src/runner"
import { StoreImpl } from "../../../src/store/store-impl"

const end: Statement = [1, Keyword.End]

describe("Behavior Tests", () => {
  test("should append and move a Print action", () => {
    const history = new History(new StoreImpl(), "[]")
    const behavior = new Behavior(history)
    const stmt = behavior.appendPrint("Hello, World!")
    expect(history.all).toEqual([stmt])
    expect(history.result).toEqual([end])

    behavior.move(stmt)
    expect(history.all).toEqual([])
    expect(history.result).toEqual([stmt, end])
    expect(history.result[0]).toBe(stmt) // Ensure the stmt is identical to the one appended
  })
})
