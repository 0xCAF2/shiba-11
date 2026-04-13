import type { Code } from "./code"
import { Environment, Runtime } from "./runtime"
import type { Statement } from "./statement"
import { CommandList } from "./parser/command-list"
import { ExpressionList } from "./parser/expression-list"
import { StatementParser } from "./parser"

export class Interpreter {
  private readonly runtime: Runtime
  private readonly environment: Environment
  private readonly parser: StatementParser

  constructor(
    main: Code,
    cmdList = new CommandList(),
    exprList = new ExpressionList(),
  ) {
    this.parser = new StatementParser(cmdList, exprList)

    const stmts =
      typeof main === "string" ? (JSON.parse(main) as Statement[]) : main
    this.environment = new Environment(stmts)
    this.runtime = new Runtime(this.environment)
  }

  run() {
    this.runtime.run()
  }
}
