import type { Value } from "../expression"

export class Scope {
  private readonly dict = new Map<string, Value>()

  constructor(public readonly parent: Scope | null = null) {}

  lookup(name: string): Value {
    if (this.dict.has(name)) {
      return this.dict.get(name)!
    } else if (this.parent) {
      return this.parent.lookup(name)
    } else {
      return null
    }
  }

  assign(name: string, value: Value) {
    this.dict.set(name, value)
  }
}
