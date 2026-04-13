import { describe, expect, test } from "bun:test"
import { Interpreter, type Statement } from "../../../src/interpreter"

describe("Interpreter", () => {
  test("should be defined", () => {
    expect(Interpreter).toBeDefined()
  })

  test("should be instantiable", () => {
    const interpreter = new Interpreter()
    expect(interpreter).toBeInstanceOf(Interpreter)
  })

  test("should accept a string as the Code in the constructor", () => {
    const code = "print('Hello, World!')"
    const interpreter = new Interpreter(code)
    expect(interpreter).toBeInstanceOf(Interpreter)
  })

  test("should accept an array of Statements as the Code in the constructor", () => {
    const statements = [[1, [], "print", "Hello, World!"]] as Statement[]
    const interpreter = new Interpreter(statements)
    expect(interpreter).toBeInstanceOf(Interpreter)
  })
})
