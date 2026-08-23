import { describe, expect, test } from "bun:test"
import { render, screen, waitFor } from "@testing-library/preact"
import { Print } from "../../../../../../src/renderer/component/preact/ja/print"

function PrintComponent() {
  const printAction = new Print(["Hello, World."])
  return printAction.render()
}

describe("A component of Print action", () => {
  test("should render the Print component", async () => {
    const { debug } = render(<PrintComponent />)
    await waitFor(() => {
      debug()
      const printElement = screen.getByText("Hello, World.")
      expect(printElement).toBeDefined()
      expect(() => {
        const _ = screen.getByText("This is a dummy text.")
      }).toThrow()
    })
  })
})
