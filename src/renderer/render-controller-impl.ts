import type { Behavior } from "../behavior"
import type { RenderController } from "./render-controller"

// For testing purposes
export class RenderControllerImpl implements RenderController<string> {
  constructor(public readonly behavior: Behavior) {}

  private _lines: string[] = []

  appendLine(line: string): void {
    this._lines.push(line)
  }

  render(parent: HTMLElement): void {
    parent.innerHTML = this._lines.join("<br>")
  }
}
