import type { Action } from "../../interpreter/action"
import type { Runtime } from "../../interpreter/runtime"
import { Keyword } from "../../interpreter/action"
import type { Any } from "../../interpreter/parser/json-element"
import type { Store } from "../store"

export class Print implements Action {
  constructor(
    private store: Store,
    public readonly values: Any[],
  ) {}

  execute(runtime: Runtime): void {
    this.store.append([1, Keyword.Print, this.values])
  }
}
