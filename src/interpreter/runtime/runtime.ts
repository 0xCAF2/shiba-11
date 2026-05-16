import { type Action } from "../action"
import {
  BinOp,
  Call,
  Subscript,
  Variable,
  type Expression,
  type Value,
} from "../expression"
import type { StatementParser } from "../parser"
import { Index, type Statement } from "../statement"
import { Address } from "./address"
import { Block, BlockExitReason } from "./block"
import { Environment } from "./environment"

export interface UIEventDispatcher {
  requestUpdate(): void
}

export class Runtime {
  constructor(
    public readonly envr: Environment,
    public readonly parser: StatementParser,
    public readonly dispatcher?: UIEventDispatcher,
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
    } else if (
      expr instanceof Variable ||
      expr instanceof Subscript ||
      expr instanceof BinOp ||
      expr instanceof Call
    ) {
      return expr.evaluate(this)
    } else {
      throw new Error(`Unsupported expression: ${expr}`)
    }
  }

  parse(stmt: Statement): Action | null {
    return this.parser.parse(stmt)
  }

  hasNext(): boolean {
    return this.envr.hasNext()
  }

  next(): Statement {
    outer: while (true) {
      this.envr.address = this.envr.address.step()
      const currentIndent = this.envr.currentStmt[Index.Indent]
      let deltaX = this.envr.address.indent.x - currentIndent
      inner: while (deltaX > 0) {
        const reason = this.popBlock()
        switch (reason) {
          case BlockExitReason.Shift:
            deltaX -= 1
            this.envr.address = this.envr.address.shift(-1)
            break
          case BlockExitReason.Shift2:
            deltaX -= 2
            this.envr.address = this.envr.address.shift(-2)
            const _ = this.popBlock() // should pop ifs block
            break
          case BlockExitReason.Jump:
            break inner
          case BlockExitReason.Return:
            break inner
          case BlockExitReason.EndHandler:
            this.jumpTo(
              new Address({ indent: 1, line: this.envr.stmts.length - 1 }),
            ) // jump to the end of program
            break outer
          case BlockExitReason.Error:
            this.envr.address = new Address({
              indent: 0,
              line: this.envr.address.line.y,
            })
            break outer
        }
      }
      if (deltaX === 0) {
        break outer
      }
    }
    return this.envr.currentStmt
  }

  jumpTo(address: Address) {
    this.envr.address = address
  }

  popBlock(): BlockExitReason {
    const block = this.envr.blocks.pop()
    if (block) {
      return block.didExit()
    }
    // Throwing an error here would interrupt the editor.
    // throw new Error(`No block to pop in ${this.envr.address.toString()}`)
    return BlockExitReason.Error
  }

  pushBlock(block: Block) {
    if (block.willEnter()) {
      this.envr.blocks.push(block)
      this.envr.address = block.address.shift(1)
    }
  }
}
