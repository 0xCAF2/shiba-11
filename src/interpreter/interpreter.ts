import type { Code } from "./code"
import { Environment, Runtime } from "./runtime"
import type { Statement } from "./statement"
import { ActionList } from "./parser/action-list"
import { ExpressionList } from "./parser/expression-list"
import { StatementParser } from "./parser"
import type { Value } from "./expression"
import type { Renderer } from "./web/renderer"

export class Interpreter<T> {
  public readonly runtime: Runtime

  constructor(
    main: Code,
    public readonly renderer: Renderer<T>,
    actionList = new ActionList(),
    exprList = new ExpressionList(),
  ) {
    const parser = new StatementParser(actionList, exprList)

    const stmts =
      typeof main === "string" ? (JSON.parse(main) as Statement[]) : main
    const env = new Environment(stmts)
    this.runtime = new Runtime(env, parser)
  }

  defineExternalFunction(name: string, func: (...args: Value[]) => Value) {
    this.runtime.envr.context.assign(name, func)
  }

  run() {
    const r = this.runtime
    while (r.hasNext()) {
      const stmt = r.next()
      const action = r.parse(stmt)
      action?.execute(r)
    }
  }

  get resultDom(): T {
    return this.renderer.createVNode(this.runtime.envr.currentTag)
  }
}
