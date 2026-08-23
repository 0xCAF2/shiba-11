import { Interpreter } from "../../interpreter"
import { End, Keyword } from "../../interpreter/action"
import type { Any } from "../../interpreter/parser/json-element"
import { Index } from "../../interpreter/statement"
import type { Renderer } from "../renderer"
import { Print } from "./action/print"

// T is the type of each renderer's output, e.g. ComponentChildren in Preact.
export class Editor<T> extends Interpreter<T> {
  public readonly renderer: Renderer<T>

  constructor(code: string, renderer: Renderer<T>) {
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
    this.renderer = renderer
  }

  override get result(): T {
    return this.renderer.showResult()
  }
}
