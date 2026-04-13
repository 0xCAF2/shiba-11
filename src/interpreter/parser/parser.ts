import type { Command } from "../command"
import { Index, type Statement } from "../statement"
import type { CommandTable } from "./command-list"
import type { ExprParser } from "./expr-parser"

export class Parser {
  constructor(
    public readonly table: CommandTable,
    public readonly exprParser: ExprParser,
  ) {}

  parse(stmts: Statement[]): Command[] {
    const commands: Command[] = []
    for (const line of stmts) {
      const command = this.parseCommand(line)
      if (command) {
        commands.push(command)
      }
    }
    return commands
  }

  private parseCommand(line: Statement): Command | null {
    const keyword = line[Index.Keyword]
    return this.table[keyword]?.(this.exprParser) ?? null
  }
}
