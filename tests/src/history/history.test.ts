import { describe, expect, test } from "bun:test"
import { History } from "../../../src/history"
import { Keyword } from "../../../src/interpreter/action"
import type { Statement } from "../../../src/runner/statement"

describe("History", () => {
  test("should create a History instance", () => {
    const history = new History("[]")
    expect(history).toBeInstanceOf(History)
  })

  test("should add a statement to the history", () => {
    const stmt: Statement = [1, Keyword.Print, ["Hello, World."]]
    const history = new History("[]")
    history.add(stmt)
    expect(history.all).toEqual([stmt])
  })
})
