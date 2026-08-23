import { describe, expect, test } from "bun:test"
import { render, screen, waitFor } from "@testing-library/preact"
import { Editor } from "../../../../src/editor/ja/editor-component"

describe("Editor", () => {
  test("should render the editor component", async () => {
    const { debug } = render(<Editor />)
    await waitFor(() => {
      // debug()
      const editorElement = screen.getByText("Hello, World.")
      expect(editorElement).toBeDefined()
      expect(() => {
        const _ = screen.getByText("This is a dummy text.")
      }).toThrow()
    })
  })
})
