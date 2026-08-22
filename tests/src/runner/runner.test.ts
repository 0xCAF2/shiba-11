import { describe, expect, test } from "bun:test"
import { Runner } from "../../../src/runner/runner"
import type { Statement } from "../../../src/interpreter"

describe("Runner", () => {
  test("'print' action should output the correct string", () => {
    const code = [[1, "print", ["Hello, World!"]]] as Statement[]
    const runner = new Runner(code)
    runner.run()
    expect(runner.result).toBe("Hello, World!\n")
  })
})
