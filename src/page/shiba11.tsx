import { Interpreter } from '../interpreter'

export function Shiba11({ code }: { code: string }) {
  const ip = new Interpreter(code)
  ip.run()
  return <>{ip.result}</>
}
