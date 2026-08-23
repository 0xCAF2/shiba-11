import { describe, expect, test } from "bun:test"
import { History, Keyword } from "../../../src/history"
import type { Statement } from "../../../src/history/statement"

describe("History", () => {
  test("should create a History instance", () => {
    const history = new History("[]")
    expect(history).toBeInstanceOf(History)
  })

  test("should return result with arguments", () => {
    const code = [[1, Keyword.Print, ["Hello, World!"]]] as Statement[]
    const history = new History(JSON.stringify(code))
    history.run()
    expect(history.result).toEqual(code)

    const code2 = [
      [1, Keyword.Print, ["Hello, World!"]],
      [1, Keyword.Print, ["Another statement", 73]],
    ] as Statement[]
    const history2 = new History(JSON.stringify(code2))
    history2.run()
    expect(history2.result).toEqual(code2)
  })
})
