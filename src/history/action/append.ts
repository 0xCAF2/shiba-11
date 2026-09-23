import type { Action } from "../../interpreter/action"
import type { HistoryList } from "../history-list"

export class Append implements Action {
  constructor(
    public readonly list: HistoryList,
    public readonly actionKeyword: string,
    public readonly args: any[],
  ) {}
  execute(): void {
    this.list.add({
      indent: 1,
      keyword: this.actionKeyword,
      args: this.args,
    })
  }
}
