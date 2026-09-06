import type { Code } from "./code"
import { Environment, Runtime } from "./runtime"
import { type Statement } from "./statement"
import { type ActionTable } from "./parser/action-list"
import { type ExpressionTable } from "./parser/expression-list"
import { StatementParser } from "./parser"
import type { Value } from "./expression"

export abstract class Interpreter<T, U extends string> {
  public readonly runtime: Runtime<U>

  constructor(
    main: Code<U>,
    actions: ActionTable<U>,
    expressions: ExpressionTable,
  ) {
    const parser = new StatementParser(actions, expressions)

    const stmts =
      typeof main === "string" ? (JSON.parse(main) as Statement<U>[]) : main
    const envr = new Environment(stmts)
    this.runtime = new Runtime(envr, parser)
  }

  defineExternalFunction(name: string, func: (...args: Value[]) => Value) {
    this.runtime.envr.externalFunctions.set(name, func)
  }

  async run(stmt?: Statement<U>): Promise<void> {
    if (stmt) {
      this.runtime.envr.stmts.splice(
        this.runtime.envr.stmts.length - 1,
        0,
        stmt,
      )
    }

    const r = this.runtime
    while (r.hasNext()) {
      const stmt = r.next()
      const action = r.parse(stmt)
      action?.execute(r)
    }
  }

  abstract get result(): T
}
