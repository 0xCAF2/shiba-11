import { type Statement } from "../statement"
import { Address } from "./address"
import type { Block } from "./block"

/**
 * stores the current execution state.
 * No side effects should be performed in this class.
 */
export class Environment {
  public address = new Address()
  public readonly blocks: Block[] = []

  constructor(public readonly stmts: Statement[]) {}

  hasNext(): boolean {
    if (this.address.line.y >= this.stmts.length) {
      return false
    }
    return true
  }

  get currentStmt(): Statement {
    return this.stmts[this.address.line.y]!
  }
}
