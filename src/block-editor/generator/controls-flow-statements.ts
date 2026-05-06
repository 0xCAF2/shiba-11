import { Keyword } from "../../interpreter/action"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["controls_flow_statements"] = (block) => {
  const flow = block.getFieldValue("FLOW")
  let code = ""
  if (flow === "BREAK") {
    code = JSON.stringify([state.indent, Keyword.Break]) + ","
  } else if (flow === "CONTINUE") {
    code = JSON.stringify([state.indent, Keyword.Continue]) + ","
  }
  return code
}
