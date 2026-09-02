import type { Editor } from "../editor/editor"
import { Interpreter } from "../interpreter"
import type { Keyword } from "./keyword"

// T is the type of each renderer's output, e.g. ComponentChildren in Preact.
export abstract class Renderer<T> extends Interpreter<T, Keyword> {
  abstract get editor(): Editor
}
