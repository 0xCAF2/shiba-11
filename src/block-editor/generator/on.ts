import { generator as g, generatorState as state } from "./generator"

g.forBlock["on"] = (block) => {
  const eventName = block.getFieldValue("EVENT") || "click"
  const eventValue = JSON.parse(g.valueToCode(block, "VALUE", 0) || "null")
  ++state.indent
  const handlerCode = g.statementToCode(block, "HANDLER")
  --state.indent
  return (
    JSON.stringify([state.indent, "on", eventName, eventValue]) +
    "," +
    handlerCode
  )
}
