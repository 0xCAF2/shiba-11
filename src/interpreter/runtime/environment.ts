import { Keyword } from "../action"
import type { Statement } from "../statement"
import type { TagBlock } from "../web"
import { Address } from "./address"
import type { Block } from "./block"
import { Scope } from "./scope"

/**
 * stores the current execution state.
 */
export class Environment {
  private addr = new Address()
  public readonly blocks: Block[] = []
  public readonly context = new Scope()
  private parentTag: TagBlock | null = null

  constructor(public readonly stmts: Statement[]) {}

  hasNext(): boolean {
    if (this.addr.line.y + 1 >= this.stmts.length) {
      return false
    }
    return true
  }

  get address(): Address {
    return this.addr
  }

  set address(addr: Address) {
    this.addr = addr
  }

  get currentStmt(): Statement {
    const line = this.stmts[this.addr.line.y]
    if (Array.isArray(line) && line.length > 0 && typeof line[0] === "number") {
      return line
    }
    return [Number.MAX_SAFE_INTEGER, Keyword.Comment]
  }

  get currentTag(): TagBlock {
    return this.parentTag!
  }

  set currentTag(tag: TagBlock) {
    this.parentTag = tag
  }
}
