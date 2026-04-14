export class EventHandlers {
  private readonly handlers: Map<string, () => void> = new Map()

  addHandler(eventName: string, handler: () => void) {
    this.handlers.set(eventName, handler)
  }

  get all(): { [key: string]: () => void } {
    return Object.fromEntries(this.handlers)
  }
}
