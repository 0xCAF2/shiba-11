import type { Runtime } from "../runtime"
import type { Reference } from "./reference"
import type { Value } from "./value"
import type { Keyword } from "./keyword"

export class Variable implements Reference {
  constructor(public readonly name: string) {}

  assign(r: Runtime<Keyword>, value: Value): void {
    r.envr.context.assign(this.name, value)
  }

  evaluate(r: Runtime<Keyword>) {
    return r.envr.context.lookup(this.name)
  }
}
