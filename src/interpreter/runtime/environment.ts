import type { Expression, Value } from "../expression"
import type { Statement } from "../statement"

export class Environment {
  constructor(public readonly stmts: Statement[]) {}

  evaluate(expr: Expression): Value {
    if (
      typeof expr === "number" ||
      typeof expr === "string" ||
      typeof expr === "boolean" ||
      expr === null
    ) {
      return expr
    } else if (Array.isArray(expr)) {
      return expr.map((e) => this.evaluate(e))
    } else {
      throw new Error(`Unsupported expression: ${expr}`)
    }
  }
}
