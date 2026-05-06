import { Keyword } from "../../interpreter/expression"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["lists_create_empty"] = () => {
  return ["[[]]", 0]
}

g.forBlock["lists_create_with"] = (block) => {
  const items = []
  for (let i = 0; i < (block as any).itemCount_; i++) {
    items.push(g.valueToCode(block, "ADD" + i, 0) || "0")
  }
  return ["[[" + items.join(",") + "]]", 0]
}

g.forBlock["lists_repeat"] = (block) => {
  const item = g.valueToCode(block, "ITEM", 0) || "0"
  const times = g.valueToCode(block, "NUM", 0) || "0"
  return [`["${Keyword.Call}", "listsRepeat", [${item}, ${times}]]`, 0]
}
