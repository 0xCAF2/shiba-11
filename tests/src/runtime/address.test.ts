import { expect, test, describe } from "bun:test"
import {
  Address,
  Indent,
  LineIndex,
} from "../../../src/interpreter/runtime/address"

describe("Address", () => {
  test("should be defined", () => {
    expect(Address).toBeDefined()
  })

  test("initializes with default values", () => {
    const addr = new Address()
    expect(addr.indent.x).toBe(1)
    expect(addr.line.y).toBe(-1)
    expect(addr.calls).toBe(0)
  })

  test("callTo creates a new Address with incremented calls", () => {
    const addr1 = new Address({ indent: 2, line: 3, calls: 1 })
    const addr2 = addr1.callTo(new Address({ indent: 5, line: 6 }))
    expect(addr2.indent.x).toBe(5)
    expect(addr2.line.y).toBe(6)
    expect(addr2.calls).toBe(2)
  })

  test("returnFrom creates a new Address with decremented calls", () => {
    const addr1 = new Address({ indent: 2, line: 1, calls: 3 })
    const addr2 = addr1.returnFrom(new Address({ indent: 1, line: 2 }))
    expect(addr2.indent.x).toBe(1)
    expect(addr2.line.y).toBe(2)
    expect(addr2.calls).toBe(2)
  })

  test("Indent shift creates a new Address with shifted indent", () => {
    const addr = new Address({ indent: 3, line: 4 })
    const shiftedAddr = addr.shift(-2)
    expect(shiftedAddr.indent.x).toBe(1)
    expect(shiftedAddr.line.y).toBe(4)
    expect(shiftedAddr.calls).toBe(0)
  })

  test("LineIndex step creates a new Address with incremented line", () => {
    const addr = new Address({ indent: 2, line: 3 })
    const steppedAddr = addr.step()
    expect(steppedAddr.indent.x).toBe(2)
    expect(steppedAddr.line.y).toBe(4)
    expect(steppedAddr.calls).toBe(0)
  })
})
