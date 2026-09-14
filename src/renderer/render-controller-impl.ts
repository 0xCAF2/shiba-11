import type { Behavior } from "../behavior"
import type { RenderController } from "./render-controller"

// For testing purposes
export class RenderControllerImpl implements RenderController<string> {
  constructor(
    public readonly behavior: Behavior,
    private readonly isCodeRenderer: boolean,
  ) {}

  private _lines: string[] = []

  get shouldRenderAsCode(): boolean {
    return this.isCodeRenderer
  }

  appendLine(line: string): void {
    this._lines.push(line)
  }

  render(parent: HTMLElement): void {
    parent.innerHTML = this._lines.join("<br>")
  }
}
