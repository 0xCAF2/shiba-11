import { Keyword } from "../../interpreter/command"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["controls_if"] = (block) => {
  const elseifCount = (block as any).elseifCount_ || 0
  let n = 0
  let code = JSON.stringify([state.indent, Keyword.Ifs]) + ","
  state.indent++

  let conditionCode = JSON.parse(g.valueToCode(block, "IF" + n, 0) || "false")
  const ifCode = JSON.stringify([state.indent, Keyword.If, conditionCode])
  state.indent++
  const stmts = g.statementToCode(block, "DO" + n)
  state.indent--
  code += `${ifCode},${stmts}`

  for (n = 1; n <= elseifCount; n++) {
    conditionCode = JSON.parse(g.valueToCode(block, "IF" + n, 0) || "false")
    const elseifCode = JSON.stringify([
      state.indent,
      Keyword.ElseIf,
      conditionCode,
    ])
    state.indent++
    const stmts = g.statementToCode(block, "DO" + n)
    state.indent--
    code += `${elseifCode},${stmts}`
  }

  const elseCount = (block as any).elseCount_ || 0
  if (elseCount) {
    const elseCode = JSON.stringify([state.indent, Keyword.Else])
    state.indent++
    const stmts = g.statementToCode(block, "ELSE")
    state.indent--
    code += `${elseCode},${stmts}`
  }

  state.indent--
  return code
}
