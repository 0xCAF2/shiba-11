import { Interpreter } from "../interpreter"
import type { Any } from "../interpreter/parser/json-element"
import { Index } from "../interpreter/statement"
import { Print } from "./action/print"
import { End } from "./action/end"
import type { Output } from "./output"
import type { Statement } from "./statement"
import { Keyword } from "./keyword"

export class Runner extends Interpreter<string, Keyword> implements Output {
  private output: string = ""

  write(output: string): void {
    this.output += output
  }

  get result(): string {
    return this.output
  }

  constructor(main: string | Statement[]) {
    super(
      main,
      {
        [Keyword.Print]: (stmt, exprParser) => {
          return new Print(
            this,
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
