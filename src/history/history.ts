import { Interpreter } from "../interpreter"
import { Keyword } from "./keyword"
import { Index } from "./statement"
import type { Code } from "./code"
import { Append } from "./action/append"
import { End } from "./action/end"
import type { Statement } from "../runner"
import type { List } from "./list"
import { Keyword as RunnerKeyword } from "../runner"

export class History
  extends Interpreter<Statement[], Keyword>
  implements List, Code
{
  private readonly stmts: Statement[] = []
  private readonly list: Statement[] = []

  private readonly end: Statement = [1, RunnerKeyword.End]

  add(stmt: Statement): void {
    this.list.push(stmt)
  }

  get all(): Statement[] {
    return this.list.reverse()
  }

  move(stmt: Statement): void {
    const index = this.list.indexOf(stmt)
    if (index !== -1) {
      this.list.splice(index, 1)
    }
    this.stmts.push(stmt)
  }

  override get result(): Statement[] {
    return [...this.stmts, this.end]
  }

  constructor(stmts: string) {
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
