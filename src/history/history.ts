import { Interpreter } from "../interpreter"
import { Keyword } from "./keyword"
import { Index, type Statement } from "./statement"
import { Append } from "./action/append"
import { End } from "./action/end"
import type { Statement as RunnerStatement } from "../runner"
import type { HistoryList } from "./history-list"
import { Keyword as RunnerKeyword } from "../runner"
import type { Store } from "../store/store"

export class History
  extends Interpreter<RunnerStatement[], Keyword>
  implements HistoryList
{
  private readonly end: RunnerStatement = [1, RunnerKeyword.End]

  add(stmt: RunnerStatement): void {
    this.store.addToList(stmt)
  }

  get all(): RunnerStatement[] {
    return this.store.list.reverse()
  }

  move(stmt: RunnerStatement, toIndex?: number): void {
    this.store.move(stmt, toIndex)
  }

  override get result(): RunnerStatement[] {
    return [...this.store.code, this.end]
  }

  constructor(
    private readonly store: Store,
    stmts: Statement[],
  ) {
    super(
      stmts,
      {
        [Keyword.Append]: (stmt) => {
          return new Append(this, stmt[Index.Keyword], stmt[Index.FirstArg])
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {},
    )
  }
}
