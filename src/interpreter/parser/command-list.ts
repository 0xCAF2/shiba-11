import { P, type Command } from "../command"
import { Keyword } from "../command/keyword"
import type { ExprParser } from "./expr-parser"

export type CommandTable = Record<string, (exprParser: ExprParser) => Command>

export class CommandList {
  private readonly _table: CommandTable = {}

  constructor() {
    this._table[Keyword.P] = (exprParser) => new P()
  }

  get table(): CommandTable {
    return this._table
  }
}
