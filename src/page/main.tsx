import { render } from "preact"
import { Shiba11 } from "./shiba11"
import { codeSignal } from "./code"

function App() {
  return <Shiba11 code={codeSignal.value} />
}



render(<App />, document.getElementById("root")!)
