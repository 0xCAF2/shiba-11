import { Keyword } from "../command"
import type { Expression, Value } from "../expression"
import type { StatementParser } from "../parser"
import { Index, type Statement } from "../statement"
import { BlockExitReason } from "./block"
import { Environment } from "./environment"

export class Runtime {
  constructor(
    public readonly env: Environment = new Environment([
      [1, Keyword.Comment],
      [1, Keyword.End],
    ]),
    public readonly parser: StatementParser,
  ) {}

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

  parse(stmt: Statement) {
    return this.parser.parse(stmt)
  }

  hasNext() {
    return this.env.hasNext()
  }

  next(): Statement {
    const currentIndent = this.env.currentStmt[Index.Indent]
    let deltaX = this.env.address.indent.x - currentIndent
    while (deltaX > 0) {
      const reason = this.popBlock()
      if (reason === BlockExitReason.Shifted) {
        deltaX -= 1
      } else {
        break
      }
    }
    return this.env.currentStmt
  }

  popBlock(): BlockExitReason {
    const block = this.env.blocks.pop()
    if (block) {
      return block.didExit(this)
    }
    throw new Error(`No block to pop in ${this.env.address.toString()}`)
  }
}
