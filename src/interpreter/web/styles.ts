export class Styles {
  private readonly styles: Map<string, string> = new Map()

  setStyle(name: string, value: string) {
    this.styles.set(name, value)
  }

  get all(): { [key: string]: string } {
    return Object.fromEntries(this.styles)
  }
}
