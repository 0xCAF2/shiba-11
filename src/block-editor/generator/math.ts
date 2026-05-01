import { generator as g } from "./generator"

g.forBlock["math_number"] = (block) => {
  const value = block.getFieldValue("NUM") || "0"
  return [value, 0]
}

const operatorMap: Record<string, string> = {
  ADD: "+",
  MINUS: "-",
  MULTIPLY: "*",
  DIVIDE: "/",
  POWER: "**",
}

g.forBlock["math_arithmetic"] = (block) => {
  const operator = block.getFieldValue("OP") || "ADD"
  const mappedOperator = operatorMap[operator]!

  const argument0 = JSON.parse(g.valueToCode(block, "A", 0) || "0")
  const argument1 = JSON.parse(g.valueToCode(block, "B", 0) || "1")
  return [JSON.stringify([mappedOperator, argument0, argument1]), 0]
}

g.forBlock["math_modulo"] = (block) => {
  const argument0 = JSON.parse(g.valueToCode(block, "DIVIDEND", 0) || "0")
  const argument1 = JSON.parse(g.valueToCode(block, "DIVISOR", 0) || "1")
  return [JSON.stringify(["%", argument0, argument1]), 0]
}
