import type { Interpreter } from "../interpreter"

export function Subscriber<T, U>({
  interpreter,
}: {
  interpreter: Interpreter<T, U>
}) {
  const _ = interpreter.subscribeToUiChanges().value

  if (interpreter.renderer.isCompleted) {
    return <>{interpreter.resultDom}</>
  } else {
    return <div>Running...</div>
  }
}
