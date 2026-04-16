import { signal } from "@preact/signals"

// prettier-ignore
const code = JSON.stringify([
  [1, "html"],
    [2, "p"],
      [3, "text", "Hello, World."],
    [2, "p"],
      [3, "text", "Hello, World 2."],
  [1, "end"],
])

export const codeSignal = signal(code)
