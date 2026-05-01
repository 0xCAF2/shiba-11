import { Keyword } from "../../interpreter/command"
import { generator as g, generatorState as state } from "./generator"

g.forBlock["clear"] = () => {
  return `[${state.indent},"${Keyword.Clear}"],`
}
