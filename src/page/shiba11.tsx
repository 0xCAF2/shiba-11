import { Interpreter, type Renderer } from "../interpreter"
import { defineFunctions } from "./function"
import { Subscriber } from "./subscriber"

export function Shiba11<T, U>({
  code,
  renderer,
}: {
  code: string
  renderer: Renderer<T, U>
}) {
  const ip = new Interpreter(code, renderer)
  defineFunctions(ip)
  ip.run()
  return <Subscriber interpreter={ip} />
}
