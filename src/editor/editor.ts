import type { Statement } from "../history/statement"
import { Index } from "../history/statement"
import { Keyword } from "./keyword"
import { Interpreter } from "../interpreter"
import { End } from "../interpreter/action"
import type { Any } from "../interpreter/parser/json-element"
import { Append } from "./action/print"
import type { Value } from "../interpreter/expression"

export class Editor extends Interpreter<Statement[], Keyword> {
  private _result: Statement[] = []

  override get result(): Statement[] {
    return this._result
  }

  getState(name: string): Value {
    return this.runtime.envr.context.lookup(name)
  }

  setState(name: string, value: Value): void {
    this.runtime.envr.context.assign(name, value)
  }

  constructor() {
    super(
      [],
      {
        [Keyword.Append]: (stmt, exprParser) => {
          return new Append(
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
