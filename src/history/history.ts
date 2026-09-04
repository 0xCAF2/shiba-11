import { Interpreter, type Statement } from "../interpreter"
import { End } from "../interpreter/action"
import { Keyword } from "../interpreter/action/keyword"
import { Index } from "../interpreter/statement"
import { Print } from "./action/print"
import type { Store } from "./store"

export class History
  extends Interpreter<Statement[], Keyword>
  implements Store
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
        [Keyword.Print]: (stmt) => {
          return new Print(this, stmt[Index.FirstArg])
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {},
    )
  }
}
