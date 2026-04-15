import { generator as g } from "./generator"

g.forBlock["string"] = (block) => {
  const value = block.getFieldValue("VALUE") || ""
  return [JSON.stringify(value), 0]
}
