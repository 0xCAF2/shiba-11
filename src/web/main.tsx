import { render } from "preact"
import { Interpreter, type Statement } from "../interpreter"


function App() {
  // prettier-ignore-start
  const code = [
    [1, "#", "0.0.1"],
    [1, "p"],
      [2, "text", "Hello, World."],
    [1, "p"],
      [2, "text", "Hello, World 2."],
    [1, "end"],
  ] as Statement[]
  // prettier-ignore-end
  const ip = new Interpreter(code)
  ip.run()
  return <>{ip.result}</>
}

render(<App />, document.getElementById("root")!)
