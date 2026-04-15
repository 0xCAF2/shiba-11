/**
 * represents the position of the current command being executed in the code.
 * It is immutable.
 */
export class Address {
  public readonly line: LineIndex
  public readonly indent: Indent

  constructor(
    indentX: number = 1,
    lineY: number = -1,
    public readonly calls: number = 0,
  ) {
    this.indent = new Indent(indentX, this)
    this.line = new LineIndex(lineY, this)
  }

  callTo(addr: Address): Address {
    return new Address(addr.line.y, addr.indent.x, this.calls + 1)
  }

  returnFrom(addr: Address): Address {
    return new Address(addr.line.y, addr.indent.x, this.calls - 1)
  }

  toString() {
    return `(${this.indent.x}, ${this.line.y}, ${this.calls})`
  }
}

class Indent {
  constructor(
    public readonly x: number = 1,
    private readonly addr: Address,
  ) {}

  shift(delta: number): Address {
    return new Address(this.x + delta, this.addr.line.y, this.addr.calls)
  }
}

class LineIndex {
  constructor(
    public readonly y: number = -1,
    private readonly addr: Address,
  ) {}

  step(): Address {
    return new Address(this.addr.indent.x, this.y + 1, this.addr.calls)
  }
}
