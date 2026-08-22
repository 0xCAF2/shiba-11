import { Interpreter } from "../interpreter"
import { End } from "../interpreter/action"
import { Keyword } from "../interpreter/action/keyword"
import { Print } from "./action/print"

export class History extends Interpreter<string> {
  get result(): string {
    return ""
  }

  constructor(stmts: string) {
    super(
      stmts,
      {
        [Keyword.Print]: (stmt, exprParser) => {
          return new Print(stmt.slice(1).map((arg) => exprParser.readExpr(arg)))
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {},
    )
  }
}
