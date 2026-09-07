import { signal } from "@preact/signals"
import type { Store } from "../store"
import type { Statement } from "../runner"

export class Editor implements Store {
  private readonly _list = signal<Statement[]>([])
  private readonly _code = signal<Statement[]>([])

  get list(): Statement[] {
    return this._list.value
  }

  get code(): Statement[] {
    return this._code.value
  }

  addToList(stmt: Statement): void {
    this._list.value = [...this._list.value, stmt]
  }

  move(stmt: Statement, toIndex?: number): void {
    const currentIndex = this._list.value.indexOf(stmt)
    if (currentIndex === -1) return
    const newList = [...this._list.value]
    newList.splice(currentIndex, 1)
    if (toIndex !== undefined) {
      newList.splice(toIndex, 0, stmt)
    } else {
      newList.push(stmt)
    }
    this._list.value = newList
  }
}
