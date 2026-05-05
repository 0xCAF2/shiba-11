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
