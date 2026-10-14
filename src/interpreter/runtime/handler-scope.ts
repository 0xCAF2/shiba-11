import { Scope } from "./scope"
import { type Value } from "../expression"

export class HandlerScope extends Scope {
  constructor(
    parent: Scope,
    eventValue: { name: string; value: Value } | null,
  ) {
    super(parent)

    if (eventValue !== null) {
      super.assign(eventValue.name, eventValue.value)
    }
  }

  override assign(name: string, value: any) {
    this.parent?.assign(name, value)
  }
}
