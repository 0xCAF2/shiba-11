import type { Action } from "../../interpreter/action"

export class End implements Action {
  execute(): void {}
}
