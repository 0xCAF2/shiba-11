import { describe, expect, test } from "bun:test"
import { History } from "../../../src/history"
import { Keyword } from "../../../src/interpreter/action"
import type { Statement } from "../../../src/runner/statement"
import { StoreImpl } from "../../../src/store/store-impl"

describe("History", () => {
  test("should create a History instance", () => {
    const history = new History(new StoreImpl(), [])
    expect(history).toBeInstanceOf(History)
  })

  test("should add a statement to the history", () => {
    const stmt: Statement = [1, Keyword.Print, ["Hello, World."]]
    const history = new History(new StoreImpl(), [])
    history.add(stmt)
    expect(history.all).toEqual([stmt])
  })
})
