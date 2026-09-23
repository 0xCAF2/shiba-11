import { render } from "preact"
import { Shiba11 } from "../../../src/shiba11"
import { PreactRenderer } from "../../../src/renderer/preact"
import { codeSignal } from "../../../src/code"

const preact = new PreactRenderer()

function App() {
  preact.requestRerun()

  return (
    <>
      <Shiba11 code={codeSignal.value} renderer={preact} />
    </>
  )
}

render(<App />, document.getElementById("root")!)
