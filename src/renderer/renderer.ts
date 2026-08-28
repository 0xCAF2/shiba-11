import { Interpreter } from "../interpreter"

// T is the type of each renderer's output, e.g. ComponentChildren in Preact.
export abstract class Renderer<T> extends Interpreter<T> {}
