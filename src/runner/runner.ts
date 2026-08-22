import { Interpreter, type Statement } from "../interpreter"
import { End, Keyword } from "../interpreter/action"
import type { Any } from "../interpreter/parser/json-element"
import { Index } from "../interpreter/statement"
import { Print } from "./action/print"

export class Runner extends Interpreter<string> {
  private output: string = ""

  get result(): string {
    return this.output
  }

  constructor(main: string | Statement[]) {
    super(
      main,
      {
        [Keyword.Print]: (stmt, exprParser) => {
          console.log()
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

    this.defineExternalFunction("print", (args) => {
      this.output += args + "\n"
      return null
    })
  }
}
