import { expect, test, describe, beforeEach } from "bun:test"
import { Environment, Runtime } from "../../../src/interpreter/runtime"
import { StatementParser } from "../../../src/interpreter/parser"
import { CommandList } from "../../../src/interpreter/parser/command-list"
import { ExpressionList } from "../../../src/interpreter/parser/expression-list"
import type { Statement } from "../../../src/interpreter"

describe("Runtime", () => {
  test("evaluate simple expressions", () => {
    const r = new Runtime(
      new Environment([]),
      new StatementParser(new CommandList(), new ExpressionList()),
    )
    expect(r.evaluate("hello")).toBe("hello")
    expect(r.evaluate(true)).toBe(true)
    expect(r.evaluate(null)).toBe(null)
  })

  test("next() advances address and returns current statement", () => {
    const stmts = [
      [1, "p"],
      [2, "text", "Hello"],
      [1, "end"],
    ] as Statement[]
    const r = new Runtime(
      new Environment(stmts),
      new StatementParser(new CommandList(), new ExpressionList()),
    )
    expect(r.envr.address.toString()).toBe("(1, -1, 0)")
    expect(r.next()).toEqual(stmts[0]!)
    expect(r.envr.address.toString()).toBe("(1, 0, 0)")
    expect(r.next()).toEqual(stmts[2]!)
    expect(r.envr.address.toString()).toBe("(1, 2, 0)")
    expect(() => r.next()).toThrow()
    expect(r.envr.address.toString()).toBe("(1, 3, 0)")
  })
})
