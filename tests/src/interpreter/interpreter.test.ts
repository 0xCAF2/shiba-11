import { describe, expect, test } from "bun:test"
import { Interpreter, type Statement } from "../../../src/interpreter"

describe("Interpreter", () => {
  test("should be defined", () => {
    expect(Interpreter).toBeDefined()
  })

  test("accepts a string as the Code in the constructor", () => {
    const code = JSON.stringify([
      [1, "p"],
      [1, "end"],
    ])
    const interpreter = new Interpreter(code)
    expect(interpreter).toBeInstanceOf(Interpreter)
  })
})
