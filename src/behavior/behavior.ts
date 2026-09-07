import {
  Keyword as HistoryKeyword,
  type History,
  type Statement as HistoryStatement,
} from "../history"
import { Keyword } from "../interpreter/action"
import type { Statement } from "../runner"

export class Behavior {
  constructor(public readonly history: History) {}

  appendPrint(...args: any[]): Statement {
    const historyStmt: HistoryStatement = [
      1,
      HistoryKeyword.Append,
      Keyword.Print,
      args,
    ]
    this.history.run(historyStmt)
    const stmt = this.history.all[0]

    if (!stmt) {
      throw new Error("Failed to append print statement to history")
    }

    return stmt
  }
}
