import { describe, expect, test } from "bun:test"
import { Runner, Keyword } from "../../../src/runner"
import type { Statement } from "../../../src/runner"

describe("Runner", () => {
  test("Print action should output the correct string", () => {
    const code = [[1, Keyword.Print, ["Hello, World!"]]] as Statement[]
    const runner = new Runner(code)
    runner.run()
    expect(runner.result).toBe("Hello, World!\n")
  })
})
