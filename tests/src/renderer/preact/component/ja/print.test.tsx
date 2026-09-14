import { describe, expect, test } from "bun:test"
import { render, screen, waitFor } from "@testing-library/preact"
import { Print } from "../../../../../../src/renderer/preact/component/ja/print"
import { RenderControllerImpl } from "../../../../../../src/renderer/render-controller-impl"
import { Behavior } from "../../../../../../src/behavior"
import { History } from "../../../../../../src/history"
import { StoreImpl } from "../../../../../../src/store/store-impl"
import { Keyword, type Statement } from "../../../../../../src/runner"
import { Index } from "../../../../../../src/interpreter/statement"

const renderer = new RenderControllerImpl(
  new Behavior(new History(new StoreImpl(), [])),
)

function PrintComponent() {
  const stmt: Statement = [1, Keyword.Print, ["Hello, World."]]
  const printAction = new Print(renderer, stmt, stmt[Index.FirstArg])
  return <>{printAction.draw()}</>
}

function PrintComponent2() {
  const stmt: Statement = [1, Keyword.Print, ["A", "B", "C"]]
  const printAction = new Print(renderer, stmt, stmt[Index.FirstArg])
  return <>{printAction.draw()}</>
}

describe("A component of Print action", () => {
  test("should render the Print component", async () => {
    const { debug } = render(<PrintComponent />)
    await waitFor(() => {
      debug()
      const printElement = screen.getByText('"Hello, World."')
      expect(printElement).toBeDefined()
      expect(() => {
        const _ = screen.getByText('"A", "B", "C"')
      }).toThrow()
    })
  })

  test("should render the Print component with multiple values", async () => {
    const { debug } = render(<PrintComponent2 />)
    await waitFor(() => {
      debug()
      const printElement = screen.getByText('"A", "B", "C"')
      expect(printElement).toBeDefined()
      expect(() => {
        const _ = screen.getByText('"Hello, World."')
      }).toThrow()
    })
  })
})
