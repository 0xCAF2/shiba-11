import type { Code } from "./code"
import { ExprParser, Parser } from "./parser"
import { CommandList } from "./parser/command-list"
import { Environment, Runtime } from "./runtime"
import type { Statement } from "./statement"

export class Interpreter {
  private readonly runtime: Runtime
  private readonly environment: Environment
  private readonly parser: Parser

  constructor(main: Code) {
    this.parser = new Parser(new CommandList().table, new ExprParser())
    if (typeof main === "string") {
      const stmts = JSON.parse(main) as Statement[]
      const program = this.parser.parse(stmts)
      this.environment = new Environment(program)
    } else {
      this.environment = new Environment(main)
    }
    this.runtime = new Runtime(this.environment)
  }

  run() {
    this.runtime.run()
  }
}
