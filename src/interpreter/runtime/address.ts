export class Address {
  public readonly line: LineIndex
  public readonly indent: Indent

  constructor(
    lineY: number = 0,
    indentX: number = 1,
    public readonly calls: number = 0,
  ) {
    this.line = new LineIndex(lineY)
    this.indent = new Indent(indentX)
  }

  callTo(addr: Address): Address {
    return new Address(addr.line.y, addr.indent.x, this.calls + 1)
  }

  returnFrom(addr: Address): Address {
    return new Address(addr.line.y, addr.indent.x, this.calls - 1)
  }
}

export class Indent {
  constructor(public readonly x: number = 1) {}

  shift(addr: Address, delta: number): Address {
    return new Address(addr.line.y, this.x + delta, addr.calls)
  }
}

export class LineIndex {
  constructor(public readonly y: number = 0) {}

  step(addr: Address): Address {
    return new Address(this.y + 1, addr.indent.x, addr.calls)
  }
}
