import type { Statement as InterpreterStatement } from "../interpreter/statement"

export type PrintStmt = InterpreterStatement & {
  keyword: "print"
  args: any[]
}

export function isPrintStmt(stmt: InterpreterStatement): stmt is PrintStmt {
  return stmt.keyword === "print"
}

export type EndStmt = InterpreterStatement & {
  keyword: "end"
}

export function isEndStmt(stmt: InterpreterStatement): stmt is EndStmt {
  return stmt.keyword === "end"
}

export type Statement = PrintStmt | EndStmt
