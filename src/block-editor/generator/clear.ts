import { Keyword } from "../../interpreter/action"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["clear"] = () => {
  return `[${state.indent},"${Keyword.Clear}"],`
}
