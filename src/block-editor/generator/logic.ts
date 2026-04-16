import { generator as g } from "./generator"

g.forBlock["logic_boolean"] = (block) => {
  const value = block.getFieldValue("BOOL") === "TRUE"
  return [JSON.stringify(value), 0]
}

g.forBlock["logic_compare"] = (block) => {
  const OPERATORS: Record<string, string> = {
    EQ: "===",
    NEQ: "!==",
    LT: "<",
    LTE: "<=",
    GT: ">",
    GTE: ">=",
  }
  const operator = OPERATORS[block.getFieldValue("OP")]
  const [left, leftPrecedence] = g.valueToCode(block, "A", 0)
  const [right, rightPrecedence] = g.valueToCode(block, "B", 0)
  const code = `${left} ${operator} ${right}`
  return [code, 0]
}

g.forBlock["logic_operation"] = (block) => {
  const OPERATORS: Record<string, string> = {
    AND: "&&",
    OR: "||",
  }
  const operator = OPERATORS[block.getFieldValue("OP")]
  const [left, leftPrecedence] = g.valueToCode(block, "A", 0)
  const [right, rightPrecedence] = g.valueToCode(block, "B", 0)
  const code = `${left} ${operator} ${right}`
  return [code, 0]
}
