import type { Store } from "../store"
import { Behavior } from "../behavior"
import { Keyword, type Statement } from "../runner"
import { History, type Statement as HistoryStatement } from "../history"
import type { View, ViewFactory } from "../renderer"

export class Editor implements Store {
  private _list: Statement[]
  private _code: Statement[] = []

  private historyDiv: HTMLDivElement = document.createElement("div")
  private codeDiv: HTMLDivElement = document.createElement("div")

  private readonly behavior: Behavior
  private historyView: View
  private codeView: View

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
      newCode.splice(0, 0, stmt)
    } else {
      newCode.splice(toIndex, 0, stmt)
    }
    this._code = newCode
    this._list = newList

    this.historyView = this.factory.create(this.behavior, false, this._list)
    this.codeView = this.factory.create(this.behavior, true, this._code)

    this.historyView.render(this.historyDiv)
    this.codeView.render(this.codeDiv)
  }

  show(editorDiv: HTMLElement) {
    this.historyView.render(this.historyDiv)
    this.codeView.render(this.codeDiv)
    editorDiv.appendChild(this.codeDiv)
    editorDiv.appendChild(this.historyDiv)
  }

  constructor(
    historyList: string | HistoryStatement[],
    public readonly factory: ViewFactory<Keyword>,
  ) {
    const list =
      typeof historyList === "string" ? JSON.parse(historyList) : historyList
    this._list = list
    const history = new History(this, list)
    this.behavior = new Behavior(history)
    history.run()
    this._code = history.result

    this.historyView = factory.create(this.behavior, false, this._list)
    this.codeView = factory.create(this.behavior, true, this._code)
  }
}
