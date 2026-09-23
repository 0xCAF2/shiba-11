import type { Statement as InterpreterStatement } from "../interpreter/statement"
import type { Keyword } from "../../runner"

export type AppendStmt = {
  indent: 1
  keyword: "append"
  actionKeyword: Keyword
  args: any[]
}

export function isAppendStmt(stmt: InterpreterStatement): stmt is AppendStmt {
  return stmt.keyword === "append"
}

export type Statement = AppendStmt
