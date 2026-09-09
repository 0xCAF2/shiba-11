import { describe, expect, test } from "bun:test"
import { render, screen, waitFor } from "@testing-library/preact"
import { Print } from "../../../../../../src/renderer/preact/component/ja/print"
import { RendererImpl } from "../../../../../../src/renderer/renderer-impl"
import { Behavior } from "../../../../../../src/behavior"
import { History } from "../../../../../../src/history"
import { StoreImpl } from "../../../../../../src/store/store-impl"

const renderer = new RendererImpl(
  new Behavior(new History(new StoreImpl(), "[]")),
)

function PrintComponent() {
  const printAction = new Print(renderer, ["Hello, World."])
  return printAction.draw()
}

function PrintComponent2() {
  const printAction = new Print(renderer, ["A", "B", "C"])
  return printAction.draw()
}

describe("A component of Print action", () => {
  test("should render the Print component", async () => {
    const { debug } = render(<PrintComponent />)
    await waitFor(() => {
      debug()
      const printElement = screen.getByText("Hello, World.")
      expect(printElement).toBeDefined()
      expect(() => {
        const _ = screen.getByText("A B C")
      }).toThrow()
    })
  })

  test("should render the Print component with multiple values", async () => {
    const { debug } = render(<PrintComponent2 />)
    await waitFor(() => {
      debug()
      const printElement = screen.getByText("A, B, C")
      expect(printElement).toBeDefined()
      expect(() => {
        const _ = screen.getByText("This is a dummy text.Hello, World.")
      }).toThrow()
    })
  })
})
