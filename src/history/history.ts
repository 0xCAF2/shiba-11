import { Interpreter, type Statement } from "../interpreter"
import { End } from "../interpreter/action"
import { Keyword } from "../interpreter/action/keyword"
import { Index } from "../interpreter/statement"
import { Print } from "./action/print"

export class History extends Interpreter<Statement[], Keyword> {
  private readonly stmts: Statement[] = []

  override get result(): Statement[] {
    return this.stmts
  }

  constructor(stmts: string) {
    super(
      stmts,
      {
        [Keyword.Print]: (stmt) => {
          return new Print(stmt[Index.FirstArg])
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {},
    )

    this.runtime.envr.context.assign("history", this.stmts)
  }
}
