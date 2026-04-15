import { Keyword } from "../../interpreter/command"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["p"] = function (block) {
  state.indent++
  const stmt = g.statementToCode(block, "CONTENTS")
  state.indent--
  return JSON.stringify([state.indent, Keyword.P]) + "," + stmt
}
