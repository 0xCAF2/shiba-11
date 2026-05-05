/**
 * represents the position of the current action being executed in the code.
 * It is immutable.
 */
export class Address {
  public readonly indent: Indent
  public readonly line: LineIndex
  public readonly calls: number

  constructor(
    {
      indent,
      line,
      calls,
    }: { indent: number; line: number; calls?: number } = {
      indent: 1,
      line: -1,
      calls: 0,
    },
  ) {
    this.indent = new Indent(indent)
    this.line = new LineIndex(line)
    this.calls = calls ?? 0
  }

  callTo(addr: Address): Address {
    return new Address({
      indent: addr.indent.x,
      line: addr.line.y,
      calls: this.calls + 1,
    })
  }

  returnFrom(addr: Address): Address {
    return new Address({
      indent: addr.indent.x,
      line: addr.line.y,
      calls: this.calls - 1,
    })
  }

  shift(delta: number): Address {
    return new Address({
      indent: this.indent.x + delta,
      line: this.line.y,
      calls: this.calls,
    })
  }

  step(): Address {
    return new Address({
      indent: this.indent.x,
      line: this.line.y + 1,
      calls: this.calls,
    })
  }

  toString() {
    return `(${this.indent.x}, ${this.line.y}, ${this.calls})`
  }
}

export class Indent {
  constructor(public readonly x: number = 1) {}
}

export class LineIndex {
  constructor(public readonly y: number = -1) {}
}
