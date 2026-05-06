import { Keyword as ActionKeyword } from "../../interpreter/action"
import { Keyword } from "../../interpreter/expression"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["lists_subscript"] = (block) => {
  const list = g.valueToCode(block, "LIST", 0) || "[]"
  const index = g.valueToCode(block, "INDEX", 0) || "0"
  return [`["${Keyword.Subscript}", ${list}, ${index}]`, 0]
}

g.forBlock["lists_set"] = (block) => {
  const list =
    g.valueToCode(block, "LIST", 0) || `["${Keyword.Variable}","item"]`
  const value = g.valueToCode(block, "TO", 0) || "0"
  return `[${state.indent},"${ActionKeyword.Assign}",${list},${value}],`
}

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

g.forBlock["lists_split"] = (block) => {
  const text = g.valueToCode(block, "INPUT", 0) || '""'
  const delimiter = g.valueToCode(block, "DELIM", 0) || '""'
  return [`["${Keyword.Call}", "listsSplit", [${text}, ${delimiter}]]`, 0]
}

g.forBlock["lists_length"] = (block) => {
  const list = g.valueToCode(block, "VALUE", 0) || "[]"
  return [`["${Keyword.Call}", "listsLength", [${list}]]`, 0]
}

g.forBlock["lists_isEmpty"] = (block) => {
  const list = g.valueToCode(block, "VALUE", 0) || "[]"
  return [`["${Keyword.Call}", "listsIsEmpty", [${list}]]`, 0]
}

g.forBlock["lists_indexOf"] = (block) => {
  const list = g.valueToCode(block, "VALUE", 0) || "[]"
  const item = g.valueToCode(block, "FIND", 0) || "0"
  const indexOf =
    block.getFieldValue("END") === "FIRST" ? "IndexOf" : "LastIndexOf"
  return [`["${Keyword.Call}", "lists${indexOf}", [${list}, ${item}]]`, 0]
}
