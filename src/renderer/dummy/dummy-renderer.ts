import { Renderer } from "../renderer"
import type { DummyResponder } from "./dummy-responder"

export class DummyRenderer extends Renderer<DummyResponder[]> {
  override get result(): DummyResponder[] {
    return []
  }
}
