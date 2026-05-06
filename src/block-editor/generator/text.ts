import { Keyword } from "../../interpreter/action"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["static_text"] = (block) => {
  const content = g.valueToCode(block, "CONTENT", 0) || '"Hello, World."'
  return `[${state.indent},"${Keyword.StaticText}",${content}],`
}

g.forBlock["dynamic_text"] = (block) => {
  const content = g.valueToCode(block, "CONTENT", 0) || '"Hello, World."'
  return `[${state.indent},"${Keyword.DynamicText}",${content}],`
}

g.forBlock["text_content"] = (block) => {
  const text = block.getFieldValue("TEXT") || "Hello, World."
  return [`"${text}"`, 0]
}
