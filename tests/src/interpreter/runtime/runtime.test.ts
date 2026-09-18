import { expect, test, describe } from "bun:test"
import { Environment, Runtime } from "../../../../src/interpreter/runtime"
import { StatementParser } from "../../../../src/interpreter/parser"
import { ActionList } from "../../../../src/interpreter/parser/action-list"
import { ExpressionList } from "../../../../src/interpreter/parser/expression-list"
import type { Keyword, Statement } from "../../../../src/runner"

describe("Runtime", () => {
  test("evaluate simple expressions", () => {
    const r = new Runtime(
      new Environment([]),
      new StatementParser(new ActionList().table, new ExpressionList().table),
    )
    expect(r.evaluate("hello")).toBe("hello")
    expect(r.evaluate(true)).toBe(true)
    expect(r.evaluate(null)).toBe(null)
  })

  test("next() advances address and returns current statement", () => {
    const stmts = [
      { indent: 1, keyword: "#" },
      { indent: 2, keyword: "print", args: ["Hello"] },
      { indent: 1, keyword: "end" },
    ] as Statement[]
    const r = new Runtime(
      new Environment(stmts),
      new StatementParser(new ActionList().table, new ExpressionList().table),
    )
    expect(r.envr.address.toString()).toBe("(1, -1, 0)")
    expect(r.next()).toEqual(stmts[0]!)
    expect(r.envr.address.toString()).toBe("(1, 0, 0)")
    expect(r.next()).toEqual(stmts[2]!)
    expect(r.envr.address.toString()).toBe("(1, 2, 0)") // Action is not executed.
  })
})
