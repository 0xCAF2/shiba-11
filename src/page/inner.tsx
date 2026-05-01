import type { Interpreter } from "../interpreter"
import { listenForUpdate } from "../interpreter/web/request-update"

export function Inner({ interpreter }: { interpreter: Interpreter }) {
  const _ = listenForUpdate().value
  return <>{interpreter.result}</>
}
