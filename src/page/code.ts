import { signal } from "@preact/signals"

// prettier-ignore
const code = JSON.stringify([
  [1, "#", "0.0.1"],
  [1, "p"],
    [2, "text", "Hello, World."],
  [1, "p"],
    [2, "text", "Hello, World 2."],
  [1, "end"],
])

export const codeSignal = signal(code)
