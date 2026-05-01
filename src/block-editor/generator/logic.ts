import { generator as g } from "./generator"

g.forBlock["logic_boolean"] = (block) => {
  const value = block.getFieldValue("BOOL") === "TRUE"
  return [JSON.stringify(value), 0]
}

const operatorMap: Record<string, string> = {
  EQ: "===",
  NEQ: "!==",
  LT: "<",
  LTE: "<=",
  GT: ">",
  GTE: ">=",

  AND: "&&",
  OR: "||",
}

g.forBlock["logic_compare"] = (block) => {
  const operator = operatorMap[block.getFieldValue("OP")]!
  const leftValue = JSON.parse(g.valueToCode(block, "A", 0) || "0")
  const rightValue = JSON.parse(g.valueToCode(block, "B", 0) || "0")
  return [JSON.stringify([operator, leftValue, rightValue]), 0]
}

g.forBlock["logic_operation"] = (block) => {
  const operator = operatorMap[block.getFieldValue("OP")]!
  const leftValue = JSON.parse(g.valueToCode(block, "A", 0) || "false")
  const rightValue = JSON.parse(g.valueToCode(block, "B", 0) || "false")
  return [JSON.stringify([operator, leftValue, rightValue]), 0]
}
