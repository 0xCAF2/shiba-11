import { describe, expect, test } from "bun:test"
import { History } from "../../../src/history/history"

describe("History", () => {
  test("should create a History instance", () => {
    const history = new History("[]")
    expect(history).toBeInstanceOf(History)
  })

  test("should return an empty string as result", () => {
    const history = new History(
      JSON.stringify([[1, "print", ["Hello, World!"]]]),
    )
    expect(history.result).toBe("")
  })
})
