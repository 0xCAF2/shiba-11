import { Interpreter } from "../interpreter"
import { Inner } from "./inner"

export function Shiba11({ code }: { code: string }) {
  const ip = new Interpreter(code)
  ip.run()
  return <Inner interpreter={ip} />
}
