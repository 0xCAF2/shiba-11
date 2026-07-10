import { render } from "preact"
import { Shiba11 } from "./shiba11"
import { PreactRenderer } from "./renderer/preact"
import { codeSignal } from "./code"
import { useSignalEffect } from "@preact/signals"

const preact = new PreactRenderer()

function App() {
  useSignalEffect(() => {
    const _ = codeSignal.value
    preact.requestRerun()
  })

  return (
    <>
      <Shiba11 code={codeSignal.value} renderer={preact} />
    </>
  )
}

render(<App />, document.getElementById("root")!)
