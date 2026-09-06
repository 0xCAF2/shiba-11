import type { Statement as InterpreterStatement } from "../interpreter/statement"
import type { Keyword } from "./keyword"

export type Statement = InterpreterStatement<Keyword>
