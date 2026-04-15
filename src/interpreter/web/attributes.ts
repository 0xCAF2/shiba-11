export class Attributes {
  private readonly attributes: Map<string, string> = new Map()

  setAttribute(name: string, value: string) {
    this.attributes.set(name, value)
  }

  get all(): { [key: string]: string } {
    return Object.fromEntries(this.attributes)
  }
}
