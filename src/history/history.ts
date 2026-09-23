import { Interpreter } from "../interpreter"
import { Keyword } from "./keyword"
import { Index, isAppendStmt, type Statement } from "./statement"
import { Append } from "./action/append"
import type { Statement as RunnerStatement } from "../runner"
import { Move } from "./action/move"
import type { HistoryList } from "./history-list"
import { Keyword as RunnerKeyword } from "../runner"
import type { Store } from "../store/store"

export class History
  extends Interpreter<RunnerStatement[]>
  implements HistoryList
{
  private readonly end: RunnerStatement = {
    indent: 1,
    keyword: RunnerKeyword.End,
  }

  add(stmt: RunnerStatement): void {
    this.store.addToList(stmt)
  }

  get all(): RunnerStatement[] {
    return this.store.list.reverse()
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
          if (isAppendStmt(stmt)) {
            return new Append(this, stmt.actionKeyword, stmt.args)
          }
          throw new Error("Invalid append statement")
        },
        [Keyword.Move]: (stmt) => {
          return new Move(
            this.store,
            stmt[Index.FirstArg],
            stmt[Index.SecondArg],
          )
        },
      },
      {},
    )
  }
}
