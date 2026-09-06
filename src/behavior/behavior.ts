import { Keyword as HistoryKeyword, type History } from "../history"
import { Keyword } from "../interpreter/action"

export class Behavior {
  constructor(public readonly history: History) {}

  appendPrint(...args: any[]): void {
    this.history.run([1, HistoryKeyword.Append, Keyword.Print, args])
  }
}
