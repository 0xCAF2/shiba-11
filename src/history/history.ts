import { Interpreter } from "../interpreter"
import { Keyword } from "./keyword"
import { Index } from "./statement"
import { Append } from "./action/append"
import { End } from "./action/end"
import type { Statement } from "../runner"
import type { HistoryList } from "./history-list"
import { Keyword as RunnerKeyword } from "../runner"
import type { Store } from "../store/store"

export class History
  extends Interpreter<Statement[], Keyword>
  implements HistoryList
{
  private readonly end: Statement = [1, RunnerKeyword.End]

  add(stmt: Statement): void {
    this.store.addToList(stmt)
  }

  get all(): Statement[] {
    return this.store.list.reverse()
  }

  move(stmt: Statement, toIndex?: number): void {
    this.store.move(stmt, toIndex)
  }

  override get result(): Statement[] {
    return [...this.store.code, this.end]
  }

  constructor(
    private readonly store: Store,
    stmts: string,
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
