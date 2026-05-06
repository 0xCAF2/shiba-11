import { Interpreter } from "../interpreter"
import { Inner } from "./inner"

export function Shiba11({ code }: { code: string }) {
  const ip = new Interpreter(code)
  ip.defineExternalFunction("listsRepeat", (...args) => {
    const [value, times] = args
    if (typeof times !== "number" || times < 0) {
      throw new Error("times must be a non-negative number")
    }
    return Array(times).fill(value)
  })
  ip.run()
  return <Inner interpreter={ip} />
}
