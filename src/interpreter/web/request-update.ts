import { Signal, signal } from "@preact/signals"

const counter = signal(0)

export function listenForUpdate(): Signal<number> {
  return counter
}

export function requestUpdate() {
  counter.value = (counter.value + 1) % 1000
}
