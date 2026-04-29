import { generator as g } from "./generator"

g.forBlock["math_number"] = (block) => {
  const value = block.getFieldValue("NUM") || "0"
  return [value, 0]
}
