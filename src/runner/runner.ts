import { Interpreter } from "../interpreter"
import type { Any } from "../interpreter/parser/json-element"
import { Index } from "../interpreter/statement"
import { Print } from "./action/print"
import { End } from "./action/end"
import { Comment } from "./action/comment"
import { Assign } from "./action/assign"
import type { Output } from "./output"
import type { Statement } from "./statement"
import { Keyword } from "./keyword"
import {
  BinOpKeyword,
  Keyword as ExprKeyword,
} from "../interpreter/expression/keyword"
import { BinOp, Variable } from "../interpreter/expression"
import * as Elem from "../interpreter/parser/json-element"
import type { ExpressionParser } from "../interpreter/parser"

const binOpParser = (elem: Elem.Any, parser: ExpressionParser): BinOp => {
  const op = (elem as Elem.BinOp)[Elem.exprIndex.keyword] as BinOpKeyword
  const left = parser.readExpr((elem as Elem.BinOp)[Elem.exprIndex.binOpLeft]!)
  const right = parser.readExpr(
    (elem as Elem.BinOp)[Elem.exprIndex.binOpRight]!,
  )
  return new BinOp(op, left, right)
}

export class Runner extends Interpreter<string, Keyword> implements Output {
  private output: string = ""

  write(output: string): void {
    this.output += output
  }

  get result(): string {
    return this.output
  }

  constructor(main: string | Statement[]) {
    super(
      main,
      {
        [Keyword.Print]: (stmt, exprParser) => {
          return new Print(
            this,
            stmt[Index.FirstArg].map((arg: Any) => exprParser.readExpr(arg)),
          )
        },
        [Keyword.Comment]: () => {
          return new Comment()
        },
        [Keyword.Assign]: (stmt, exprParser) => {
          return new Assign(
            exprParser.readRef(stmt[Index.FirstArg]),
            exprParser.readExpr(stmt[Index.SecondArg]),
          )
        },
        [Keyword.End]: () => {
          return new End()
        },
      },
      {
        [ExprKeyword.Variable]: (elem) => {
          const name = (elem as Elem.Variable)[Elem.exprIndex.variableName]!
          return new Variable(name)
        },
        [BinOpKeyword.Add]: binOpParser,
        [BinOpKeyword.Subtract]: binOpParser,
        [BinOpKeyword.Multiply]: binOpParser,
        [BinOpKeyword.Divide]: binOpParser,
        [BinOpKeyword.Power]: binOpParser,
        [BinOpKeyword.Modulo]: binOpParser,
        [BinOpKeyword.Equal]: binOpParser,
        [BinOpKeyword.NotEqual]: binOpParser,
        [BinOpKeyword.LessThan]: binOpParser,
        [BinOpKeyword.LessThanOrEqual]: binOpParser,
        [BinOpKeyword.GreaterThan]: binOpParser,
        [BinOpKeyword.GreaterThanOrEqual]: binOpParser,
        [BinOpKeyword.And]: binOpParser,
        [BinOpKeyword.Or]: binOpParser,
      },
    )
  }
}
