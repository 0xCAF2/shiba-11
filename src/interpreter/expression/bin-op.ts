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
      case BinOpKeyword.Subtract:
        if (typeof leftValue === "number" && typeof rightValue === "number") {
          return leftValue - rightValue
        } else {
          throw new Error(
            `Invalid operands for subtraction: ${leftValue} and ${rightValue}`,
          )
        }
      case BinOpKeyword.Multiply:
        if (typeof leftValue === "number" && typeof rightValue === "number") {
          return leftValue * rightValue
        } else {
          throw new Error(
            `Invalid operands for multiplication: ${leftValue} and ${rightValue}`,
          )
        }
      case BinOpKeyword.Divide:
        if (typeof leftValue === "number" && typeof rightValue === "number") {
          if (rightValue === 0) {
            throw new Error("Division by zero")
          }
          return leftValue / rightValue
        } else {
          throw new Error(
            `Invalid operands for division: ${leftValue} and ${rightValue}`,
          )
        }
      case BinOpKeyword.Power:
        if (typeof leftValue === "number" && typeof rightValue === "number") {
          return leftValue ** rightValue
        } else {
          throw new Error(
            `Invalid operands for exponentiation: ${leftValue} and ${rightValue}`,
          )
        }
      case BinOpKeyword.Modulo:
        if (typeof leftValue === "number" && typeof rightValue === "number") {
          if (rightValue === 0) {
            throw new Error("Division by zero in modulo operation")
          }
          return leftValue % rightValue
        } else {
          throw new Error(
            `Invalid operands for modulo: ${leftValue} and ${rightValue}`,
          )
        }
      case BinOpKeyword.Equal:
        return leftValue === rightValue
      case BinOpKeyword.NotEqual:
        return leftValue !== rightValue
      case BinOpKeyword.LessThan:
        if (leftValue === null || rightValue === null) {
          throw new Error("Null values are not supported in binary operations")
        }
        return leftValue < rightValue
      case BinOpKeyword.LessThanOrEqual:
        if (leftValue === null || rightValue === null) {
          throw new Error("Null values are not supported in binary operations")
        }
        return leftValue <= rightValue
      case BinOpKeyword.GreaterThan:
        if (leftValue === null || rightValue === null) {
          throw new Error("Null values are not supported in binary operations")
        }
        return leftValue > rightValue
      case BinOpKeyword.GreaterThanOrEqual:
        if (leftValue === null || rightValue === null) {
          throw new Error("Null values are not supported in binary operations")
        }
        return leftValue >= rightValue
      case BinOpKeyword.And:
        return Boolean(leftValue) && Boolean(rightValue)
      case BinOpKeyword.Or:
        return Boolean(leftValue) || Boolean(rightValue)
      default:
        throw new Error(`Unsupported binary operator: ${this.op}`)
    }
  }
}
