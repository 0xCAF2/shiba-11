import type { Interpreter } from "../interpreter"

export function Subscriber<T, U>({
  interpreter,
}: {
  interpreter: Interpreter<T, U>
}) {
  const _ = interpreter.subscribeToUiChanges().value
  return <>{interpreter.resultDom}</>
}
