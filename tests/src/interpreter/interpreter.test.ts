import { describe, expect, test } from "bun:test"
import { Interpreter } from "../../../src/interpreter"

describe("Interpreter", () => {
  test("should be defined", () => {
    expect(Interpreter).toBeDefined()
  })

  test("accepts a string as the Code in the constructor", () => {
    const code = JSON.stringify([
      [1, "#", "Hello, World!"],
      [1, "end"],
    ])
    const interpreter = new Interpreter(code)
    expect(interpreter).toBeInstanceOf(Interpreter)
  })

  test("runs without errors", () => {
    const code = JSON.stringify([
      [1, "#", "Hello, World!"],
      [1, "end"],
    ])
    const interpreter = new Interpreter(code)
    expect(() => interpreter.run()).not.toThrow()
  })

  test("runs conditional statements", () => {
    const code = JSON.stringify([
      [1, "ifs"],
      [2, "if", true],
      [3, "=", ["var", "x"], "This is true!"],
      [2, "else"],
      [3, "=", ["var", "x"], "This is false!"],
      [1, "end"],
    ])
    const interpreter = new Interpreter(code)
    interpreter.run()
    expect(interpreter.runtime.envr.context.lookup("x")).toBe("This is true!")

    const code2 = JSON.stringify([
      [1, "ifs"],
      [2, "if", false],
      [3, "=", ["var", "x"], "This is true!"],
      [2, "else"],
      [3, "=", ["var", "x"], "This is false!"],
      [1, "end"],
    ])
    const interpreter2 = new Interpreter(code2)
    interpreter2.run()
    expect(interpreter2.runtime.envr.context.lookup("x")).toBe("This is false!")
  })

  test("runs loops", () => {
    const code = JSON.stringify([
      [1, "=", ["var", "x"], 0],
      [1, "repeat", 3],
      [2, "=", ["var", "x"], ["+", ["var", "x"], 1]],
      [1, "end"],
    ])
    const interpreter = new Interpreter(code)
    interpreter.run()
    expect(interpreter.runtime.envr.context.lookup("x")).toBe(3)
  })
})
