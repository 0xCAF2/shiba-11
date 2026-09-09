import type { Behavior } from "../behavior"
import type { Renderer } from "./renderer"

// For testing purposes
export class RendererImpl implements Renderer<string> {
  constructor(public readonly behavior: Behavior) {}

  private _lines: string[] = []

  appendLine(line: string): void {
    this._lines.push(line)
  }

  render(parent: HTMLElement): void {
    parent.innerHTML = this._lines.join("<br>")
  }
}
