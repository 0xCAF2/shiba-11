import { Keyword } from "../../interpreter/command"
import { generator as g, generatorState as state } from "./generator"

g.forBlock[Keyword.Style] = (block) => {
  const name = block.getFieldValue("NAME") || "color"
  const value = g.valueToCode(block, "VALUE", 0) || '"black"'
  return `[${state.indent},"${Keyword.Style}","${name}",${value}],`
}
