import { expect, test, describe } from "bun:test"
import { Address } from "../../../src/interpreter/runtime/address"

describe("Address", () => {
  test("should be defined", () => {
    expect(Address).toBeDefined()
  })

  test("initializes with default values", () => {
    const addr = new Address()
    expect(addr.line.y).toBe(-1)
    expect(addr.indent.x).toBe(1)
    expect(addr.calls).toBe(0)
  })

  test("callTo creates a new Address with incremented calls", () => {
    const addr1 = new Address(2, 3, 1)
    const addr2 = addr1.callTo(new Address(5, 6))
    expect(addr2.line.y).toBe(5)
    expect(addr2.indent.x).toBe(6)
    expect(addr2.calls).toBe(2)
  })

  test("returnFrom creates a new Address with decremented calls", () => {
    const addr1 = new Address(4, 5, 3)
    const addr2 = addr1.returnFrom(new Address(1, 2))
    expect(addr2.line.y).toBe(1)
    expect(addr2.indent.x).toBe(2)
    expect(addr2.calls).toBe(2)
  })

  test("Indent shift creates a new Address with shifted indent", () => {
    const addr = new Address(3, 4, 2)
    const shiftedAddr = addr.indent.shift(-2)
    expect(shiftedAddr.indent.x).toBe(1)
    expect(shiftedAddr.line.y).toBe(4)
    expect(shiftedAddr.calls).toBe(2)
  })

  test("LineIndex step creates a new Address with incremented line", () => {
    const addr = new Address(2, 3, 1)
    const steppedAddr = addr.line.step()
    expect(steppedAddr.indent.x).toBe(2)
    expect(steppedAddr.line.y).toBe(4)
    expect(steppedAddr.calls).toBe(1)
  })
})
