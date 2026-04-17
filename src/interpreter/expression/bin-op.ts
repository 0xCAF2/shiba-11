import type { Runtime } from "../runtime"
import type { Expression } from "./expression"
import { BinOpKeyword } from "./keyword"
import type { Value } from "./value"

export class BinOp {
  constructor(
    public readonly op: string,
    public readonly left: Expression,
    public readonly right: Expression,
  ) {}

  evaluate(r: Runtime): Value {
    const leftValue = r.evaluate(this.left)
    const rightValue = r.evaluate(this.right)
    switch (this.op) {
      case BinOpKeyword.Add:
        if (typeof leftValue === "number" && typeof rightValue === "number") {
          return leftValue + rightValue
        } else if (
          typeof leftValue === "string" ||
          typeof rightValue === "string"
        ) {
          return String(leftValue) + String(rightValue)
        } else {
          throw new Error(
            `Invalid operands for addition: ${leftValue} and ${rightValue}`,
          )
        }
      default:
        throw new Error(`Unsupported binary operator: ${this.op}`)
    }
  }
}
