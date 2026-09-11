import { batch, signal } from "@preact/signals"
import type { Store } from "../store"
import { Behavior } from "../behavior"
import type { Statement } from "../runner"
import { History } from "../history"
import { PreactRenderer } from "../renderer/preact/preact-renderer"
import type { Renderer } from "../renderer"
import type { ComponentChildren } from "preact"

export class Editor<T> implements Store {
  private readonly _list = signal<Statement[]>([])
  private readonly _code = signal<Statement[]>([])

  private readonly history: History
  private readonly behavior: Behavior
  private readonly renderer: Renderer<ComponentChildren>

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
    if (currentIndex === -1) throw new Error("Statement not found in the list")
    const newList = [...this._list.value]
    newList.splice(currentIndex, 1)
    const newCode = [...this._code.value]
    if (toIndex === undefined) {
      newCode.push(stmt)
    } else {
      newCode.splice(toIndex, 0, stmt)
    }
    batch(() => {
      this._code.value = newCode
      this._list.value = newList
    })
  }

  show(editorDiv: HTMLElement) {
    this.renderer.render(editorDiv)
  }

  constructor() {
    this.history = new History(this, "[]")
    this.behavior = new Behavior(this.history)
    this.renderer = new PreactRenderer(
      this.behavior,
      '[[1, "print", ["Hello, World.", "test"]], [1, "end"]]',
    )
  }
}
