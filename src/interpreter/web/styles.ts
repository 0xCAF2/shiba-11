export class Styles {
  private readonly _styles: Map<string, () => string> = new Map()

  setStyle(name: string, expr: () => string) {
    this._styles.set(name, expr)
  }

  get all(): { [key: string]: string } {
    const result: { [key: string]: string } = {}
    for (const [key, value] of this._styles) {
      result[key] = value()
    }
    return result
  }
}
