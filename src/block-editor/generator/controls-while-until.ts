import { Keyword } from "../../interpreter/action"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["controls_whileUntil"] = (block) => {
  const condition = JSON.parse(g.valueToCode(block, "BOOL", 0) || "false")
  let code = JSON.stringify([state.indent, Keyword.While, condition]) + ","
  state.indent++
  code += g.statementToCode(block, "DO")
  state.indent--
  return code
}
