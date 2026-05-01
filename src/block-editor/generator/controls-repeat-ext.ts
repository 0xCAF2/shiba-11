import { generator as g, generatorState as state } from "./generator"

g.forBlock["controls_repeat_ext"] = (block) => {
  const times = JSON.parse(g.valueToCode(block, "TIMES", 0) || "0")
  let code = JSON.stringify([state.indent, "repeat", times]) + ","
  state.indent++
  code += g.statementToCode(block, "DO")
  state.indent--
  return code
}
