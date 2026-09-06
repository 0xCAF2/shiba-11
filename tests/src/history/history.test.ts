import { describe, expect, test } from "bun:test"
import { History, Keyword as KeywordForHistory } from "../../../src/history"
import { Keyword } from "../../../src/interpreter/action"
import type { Statement } from "../../../src/history/statement"

const end = [1, KeywordForHistory.End]

describe("History", () => {
  test("should create a History instance", () => {
    const history = new History("[]")
    expect(history).toBeInstanceOf(History)
  })

  test("should append a statement to the history", () => {
    const stmt: Statement = [
      1,
      KeywordForHistory.Append,
      Keyword.Print,
      ["Hello, World."],
    ]
    const history = new History(JSON.stringify([stmt, end]))
    history.run()
    expect(history.result).toEqual([[1, Keyword.Print, ["Hello, World."]]])
  })
})
