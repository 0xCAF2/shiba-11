import { Interpreter, type Statement } from "../interpreter"

// T is the type of each renderer's output, e.g. ComponentChildren in Preact.
export class Renderer<T> extends Interpreter<T> {
  constructor(code: string) {
    super(code, {}, {})
  }

  override get result(): T {
    return this.showResult()
  }
}
