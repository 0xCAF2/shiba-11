import type { View } from "./view"
import type { Behavior } from "../behavior"
import type { Statement } from "../interpreter"

export interface ViewFactory<T extends string> {
  create(
    behavior: Behavior,
    isCodeRenderer: boolean,
    stmt: Statement<T>[],
  ): View
}
