export interface Command {
  get keyword(): string
  execute(): void
}
