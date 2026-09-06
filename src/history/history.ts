import { Interpreter, type Statement } from "../interpreter"
import { Keyword } from "./keyword"
import { Index } from "./statement"
import type { Result } from "./result"
import { Append } from "./action/append"
import { End } from "./action/end"

export class History
  extends Interpreter<Statement[], Keyword>
  implements Result
{
  private readonly stmts: Statement[] = []

  append(stmt: Statement): void {
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
