import { Interpreter } from "../interpreter"
import { Keyword } from "./keyword"
import { Index } from "./statement"
import type { Result } from "./result"
import { Append } from "./action/append"
import { End } from "./action/end"
import type { Statement } from "../runner"

export class History
  extends Interpreter<Statement[], Keyword>
  implements Result
{
  private readonly stmts: Statement[] = []

  write(stmt: Statement): void {
    this.stmts.push(stmt)
  }

  override get result(): Statement[] {
    return this.stmts
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
