import type { Action, Keyword } from "../../interpreter/action"
import type { Result } from "../result"

export class Append implements Action {
  constructor(
    public readonly result: Result,
    public readonly keyword: Keyword,
    public readonly args: any[],
  ) {}
  execute(): void {
    this.result.append([1, this.keyword, this.args])
  }
}
