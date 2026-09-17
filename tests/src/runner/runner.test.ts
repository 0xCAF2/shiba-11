import { describe, expect, test } from "bun:test"
import { Runner, Keyword } from "../../../src/runner"
import { Keyword as ExprKeyword } from "../../../src/interpreter/expression/keyword"
import type { Statement } from "../../../src/runner"

describe("Runner", () => {
  test("Print action should output the correct string", () => {
    const code = [[1, Keyword.Print, ["Hello, World!"]]] as Statement[]
    const runner = new Runner(code)
    runner.run()
    expect(runner.result).toBe("Hello, World!\n")
  })

  test("Assign action should correctly assign a value", () => {
    const code = [
      [1, Keyword.Assign, [ExprKeyword.Variable, "x"], 42],
      [1, Keyword.Print, [[ExprKeyword.Variable, "x"]]],
    ] as Statement[]
    const runner = new Runner(code)
    runner.run()
    expect(runner.result).toBe("42\n")
  })
})
