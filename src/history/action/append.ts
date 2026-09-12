import type { Action } from "../../interpreter/action"
import type { Keyword } from "../../runner"
import type { HistoryList } from "../history-list"

export class Append implements Action {
  constructor(
    public readonly list: HistoryList,
    public readonly keyword: Keyword,
    public readonly args: any[],
  ) {}
  execute(): void {
    this.list.add([1, this.keyword, this.args])
  }
}
