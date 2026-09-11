import { batch, signal } from "@preact/signals"
import type { Store } from "../store"
import { Behavior } from "../behavior"
import { Keyword, type Statement } from "../runner"
import { History } from "../history"
import { PreactRenderer } from "../renderer/preact/preact-renderer"
import type { View } from "../renderer"

export class Editor implements Store {
  private readonly _list = signal<Statement[]>([
    [1, Keyword.Print, ["Hello, World.", "test"]],
    [1, Keyword.End],
  ])
  private readonly _code = signal<Statement[]>([])

  private readonly history: History
  private readonly behavior: Behavior
  private readonly historyView: View
  private readonly codeView: View

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
    const historyDiv = document.createElement("div")
    const codeDiv = document.createElement("div")
    this.historyView.render(historyDiv)
    this.codeView.render(codeDiv)
    editorDiv.appendChild(codeDiv)
    editorDiv.appendChild(historyDiv)
  }

  constructor() {
    this.history = new History(this, [])
    this.behavior = new Behavior(this.history)
    this.historyView = new PreactRenderer(this.behavior, this._list.value)
    this.codeView = new PreactRenderer(this.behavior, this._code.value)
  }
}
