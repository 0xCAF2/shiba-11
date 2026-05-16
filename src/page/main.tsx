import { render } from "preact"
import { Shiba11 } from "./shiba11"
import { PreactRenderer } from "./renderer/preact"
import { codeSignal } from "./code"

const preact = new PreactRenderer()

function App() {
  return (
    <>
      <Shiba11 code={codeSignal.value} renderer={preact} />
    </>
  )
}

render(<App />, document.getElementById("root")!)
