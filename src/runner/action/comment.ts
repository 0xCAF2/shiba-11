import type { Action } from "../../interpreter/action"

export class Comment implements Action {
  execute(): void {
    // Do nothing for comments
  }
}
