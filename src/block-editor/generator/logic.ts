import { generator as g } from "./generator"

g.forBlock["logic_boolean"] = (block) => {
  const value = block.getFieldValue("BOOL") === "TRUE"
  return [JSON.stringify(value), 0]
}
