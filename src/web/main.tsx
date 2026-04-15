import { render } from "preact"
import { Interpreter } from "../interpreter"


// prettier-ignore-start
const code = JSON.stringify([
  [1, "#", "0.0.1"],
  [1, "p"],
    [2, "text", "Hello, World."],
  [1, "p"],
    [2, "text", "Hello, World 2."],
  [1, "end"],
])
// prettier-ignore-end

function App({ code }: { code: string }) {
  const ip = new Interpreter(code)
  ip.run()
  return <>{ip.result}</>
}

render(<App code={code} />, document.getElementById("root")!)
