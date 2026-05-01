import type { Code } from "./code"
import { Environment, Runtime } from "./runtime"
import type { Statement } from "./statement"
import { CommandList } from "./parser/command-list"
import { ExpressionList } from "./parser/expression-list"
import { StatementParser } from "./parser"

export class Interpreter {
  public readonly runtime: Runtime

  constructor(
    main: Code,
    cmdList = new CommandList(),
    exprList = new ExpressionList(),
  ) {
    const parser = new StatementParser(cmdList, exprList)

    const stmts =
      typeof main === "string" ? (JSON.parse(main) as Statement[]) : main
    const env = new Environment(stmts)
    this.runtime = new Runtime(env, parser)
  }

  run() {
    const r = this.runtime
    while (r.hasNext()) {
      const stmt = r.next()
      const command = r.parse(stmt)
      command?.execute(r)
    }
  }

  get result(): any | null {
    return (
      this.runtime.envr.currentTag?.children.map((child) =>
        typeof child === "string"
          ? child
          : typeof child === "function"
            ? child()
            : child.createVNode(),
      ) ?? null
    )
  }
}
