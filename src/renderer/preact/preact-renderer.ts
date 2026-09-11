import { type ComponentChildren, h, render } from "preact"
import type { Renderer } from "../renderer"
import type { Behavior } from "../../behavior"
import { Print } from "./component/ja/print"
import { Keyword } from "../../interpreter/action"
import { End } from "./component/ja/end"
import { Interpreter } from "../../interpreter"
import { Index } from "../../interpreter/statement"
import { ExpressionList } from "../../interpreter/parser/expression-list"
import type { Any } from "../../interpreter/parser/json-element"

export class PreactRenderer
  extends Interpreter<ComponentChildren, Keyword>
  implements Renderer<ComponentChildren>
{
  private readonly _lines: ComponentChildren[] = []

  constructor(
    public readonly behavior: Behavior,
    code: string,
  ) {
    super(
      code,
      {
        [Keyword.Print]: (stmt, exprParser) => {
          return new Print(
            this,
            (stmt[Index.FirstArg] as Array<Any>).map(exprParser.readExpr),
          )
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      new ExpressionList().table,
    )
  }

  override get result(): ComponentChildren {
    return h("div", null, ...this._lines)
  }

  appendLine(line: ComponentChildren): void {
    this._lines.push(line)
  }

  render(parent: HTMLElement): void {
    this.run()
    render(this.result, parent)
  }
}
