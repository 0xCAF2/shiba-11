import type { Statement } from "../runner"
import type { Store } from "./store"

// Implementation of the Store interface for testing purposes
export class StoreImpl implements Store {
  private readonly _list: Statement[] = []
  private readonly _code: Statement[] = []

  get list(): Statement[] {
    return this._list
  }

  get code(): Statement[] {
    return this._code
  }

  addToList(stmt: Statement): void {
    this._list.push(stmt)
  }

  move(stmt: Statement, toIndex?: number): void {
    const currentIndex = this._list.indexOf(stmt)
    if (currentIndex === -1) throw new Error("Statement not found in the list")
    this._list.splice(currentIndex, 1)
    if (toIndex === undefined) {
      this._code.push(stmt)
    } else {
      this._code.splice(toIndex, 0, stmt)
    }
  }
}
