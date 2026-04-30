import { render } from "preact"
import QrScanner from "./scanner"

function Loader() {
  return (
    <>
      <div>Loading...</div>
    </>
  )
}

render(<Loader />, document.getElementById("root")!)
