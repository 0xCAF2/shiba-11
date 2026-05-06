import { Interpreter } from "../interpreter"
import { defineFunctions } from "./functions"
import { Inner } from "./inner"

export function Shiba11({ code }: { code: string }) {
  const ip = new Interpreter(code)
  defineFunctions(ip)
  ip.run()
  return <Inner interpreter={ip} />
}
