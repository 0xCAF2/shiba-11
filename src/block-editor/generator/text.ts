import { Keyword } from "../../interpreter/command"
import { generator as g, generatorState as state } from "./generator"

g.forBlock[Keyword.Text] = (block) => {
  const content = g.valueToCode(block, "CONTENT", 0) || '"Hello, World."'
  return `[${state.indent},"${Keyword.Text}",${content}],`
}
