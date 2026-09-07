import type { Action, Keyword } from "../../interpreter/action"
import type { List } from "../list"

export class Append implements Action {
  constructor(
    public readonly list: List,
    public readonly keyword: Keyword,
    public readonly args: any[],
  ) {}
  execute(): void {
    this.list.add([1, this.keyword, this.args])
  }
}
