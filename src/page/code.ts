import { signal } from "@preact/signals"

// prettier-ignore
const code = JSON.stringify([
  [1, "h"],
    [2, "p"],
      [3, "s", "Hello, World."],
    [2, "p"],
      [3, "s", "Hello, World 2."],
  [1, "end"],
])

export const codeSignal = signal(code)
