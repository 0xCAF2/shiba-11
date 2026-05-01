import { Keyword } from "../../interpreter/command"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["static_text"] = (block) => {
  const content = g.valueToCode(block, "CONTENT", 0) || '"Hello, World."'
  return `[${state.indent},"${Keyword.StaticText}",${content}],`
}

g.forBlock["dynamic_text"] = (block) => {
  const content = g.valueToCode(block, "CONTENT", 0) || '"Hello, World."'
  return `[${state.indent},"${Keyword.DynamicText}",${content}],`
}
