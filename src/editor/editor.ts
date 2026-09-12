import type { Store } from "../store"
import { Behavior } from "../behavior"
import { Keyword, type Statement } from "../runner"
import { History, type Statement as HistoryStatement } from "../history"
import type { View, ViewFactory } from "../renderer"

export class Editor implements Store {
  private _list: Statement[]
  private _code: Statement[] = []

  private readonly history: History
  private readonly behavior: Behavior
  private readonly historyView: View
  private readonly codeView: View

  get list(): Statement[] {
    return this._list
  }

  get code(): Statement[] {
    return this._code
  }

  addToList(stmt: Statement): void {
    this._list = [...this._list, stmt]
  }

  move(stmt: Statement, toIndex?: number): void {
    const currentIndex = this._list.indexOf(stmt)
    if (currentIndex === -1) throw new Error("Statement not found in the list")
    const newList = [...this._list]
    newList.splice(currentIndex, 1)
    const newCode = [...this._code]
    if (toIndex === undefined) {
      newCode.push(stmt)
    } else {
      newCode.splice(toIndex, 0, stmt)
    }
    this._code = newCode
    this._list = newList
  }

  show(editorDiv: HTMLElement) {
    const historyDiv = document.createElement("div")
    const codeDiv = document.createElement("div")
    this.historyView.render(historyDiv)
    this.codeView.render(codeDiv)
    editorDiv.appendChild(codeDiv)
    editorDiv.appendChild(historyDiv)
  }

  constructor(
    historyList: string | HistoryStatement[],
    factory: ViewFactory<Keyword>,
  ) {
    const list =
      typeof historyList === "string" ? JSON.parse(historyList) : historyList
    this._list = list
    this.history = new History(this, list)
    this.behavior = new Behavior(this.history)
    this.history.run()
    this._code = this.history.result

    this.historyView = factory.create(this.behavior, this._list)
    this.codeView = factory.create(this.behavior, this._code)
  }
}
