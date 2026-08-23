import type { Statement } from "../history/statement"
import { Index } from "../history/statement"
import { Keyword } from "../history/keyword"
import { Interpreter } from "../interpreter"
import { End } from "../interpreter/action"
import type { Any } from "../interpreter/parser/json-element"
import { Print } from "./action/print"

export class Editor extends Interpreter<Statement[]> {
  override get result(): Statement[] {
    return []
  }

  constructor(code: string) {
    super(
      code,
      {
        [Keyword.Print]: (stmt, exprParser) => {
          return new Print(
            stmt[Index.FirstArg].map((arg: Any) => exprParser.readExpr(arg)),
          )
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {},
    )
  }
}
