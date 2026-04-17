import { type Statement } from "../statement"
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
    return this.stmts[this.addr.line.y]!
  }

  get currentTag(): TagBlock {
    return this.parentTag!
  }

  set currentTag(tag: TagBlock) {
    this.parentTag = tag
  }
}
