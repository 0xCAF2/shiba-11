import type { Action } from "../../interpreter/action"
import type { Statement } from "../../runner"
import type { Store } from "../../store"

export class Move implements Action {
  constructor(
    public readonly store: Store,
    public readonly stmt: Statement,
    public readonly toIndex: number | undefined = undefined,
  ) {}
  execute(): void {
    this.store.move(this.stmt, this.toIndex)
  }
}
