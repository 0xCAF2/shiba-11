import type { Behavior } from "../behavior"
import type { RenderTarget } from "./renderer"

// For testing purposes
export class RendererImpl implements RenderTarget<string> {
  constructor(public readonly behavior: Behavior) {}

  private _lines: string[] = []

  appendLine(line: string): void {
    this._lines.push(line)
  }

  render(parent: HTMLElement): void {
    parent.innerHTML = this._lines.join("<br>")
  }
}
