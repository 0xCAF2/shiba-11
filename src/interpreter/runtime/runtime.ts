import { Keyword, type Command } from "../command"
import type { Expression, Value } from "../expression"
import type { StatementParser } from "../parser"
import { Index, type Statement } from "../statement"
import type { TagBlock } from "../web"
import type { Address } from "./address"
import { Block, BlockExitReason } from "./block"
import { Environment } from "./environment"

export class Runtime {
  constructor(
    public readonly env: Environment,
    public readonly parser: StatementParser,
  ) {}

  evaluate(expr: Expression): Value {
    if (
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

  parse(stmt: Statement): Command | null {
    return this.parser.parse(stmt)
  }

  hasNext(): boolean {
    return this.env.hasNext()
  }

  next(): Statement {
    this.env.address = this.env.address.line.step()
    const currentIndent = this.env.currentStmt[Index.Indent]
    let deltaX = this.env.address.indent.x - currentIndent
    while (deltaX > 0) {
      const reason = this.popBlock()
      if (reason === BlockExitReason.Shifted) {
        deltaX -= 1
        this.env.address = this.env.address.indent.shift(-1)
      } else {
        break
      }
    }
    return this.env.currentStmt
  }

  jumpTo(address: Address) {
    this.env.address = address
  }

  popBlock(): BlockExitReason {
    const block = this.env.blocks.pop()
    if (block) {
      return block.didExit()
    }
    throw new Error(`No block to pop in ${this.env.address.toString()}`)
  }

  pushBlock(block: Block | TagBlock) {
    if (block.willEnter()) {
      this.env.blocks.push(block)
      this.env.address = block.address.indent.shift(1)
    }
  }
}
