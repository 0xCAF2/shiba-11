import { Keyword } from "../../interpreter/command"
import { Keyword as ExprKeyword } from "../../interpreter/expression"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["variables_set"] = (block) => {
  const varId = block.getFieldValue("VAR")
  const varName = g.getVariableName(varId)
  const value = JSON.parse(g.valueToCode(block, "VALUE", 0) || "null")
  return (
    JSON.stringify([
      state.indent,
      Keyword.Assign,
      [ExprKeyword.Variable, varName],
      value,
    ]) + ","
  )
}

g.forBlock["variables_get"] = (block) => {
  const varId = block.getFieldValue("VAR")
  const varName = g.getVariableName(varId)
  return [JSON.stringify([ExprKeyword.Variable, varName]), 0]
}
