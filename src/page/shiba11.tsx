import { Interpreter } from "../interpreter"
import { defineFunctions } from "./function"
import { Inner } from "./inner"
import { PreactRenderer } from "./renderer/preact"

export function Shiba11({ code }: { code: string }) {
  const ip = new Interpreter(code, new PreactRenderer())
  defineFunctions(ip)
  ip.run()
  return <Inner interpreter={ip} />
}
