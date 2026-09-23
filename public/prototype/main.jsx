import * as stylex from "@stylexjs/stylex"
import { colors } from "./global.stylex"
import { render } from "preact"

const actionStyle = stylex.create({
  card: {
    width: "100px",
    height: "100px",
  },
})

const assignStyle = stylex.create({
  card: {
    backgroundColor: colors.purple,
  },
})

const ifStyle = stylex.create({
  card: {
    backgroundColor: colors.blue,
  },
})

const repeatStyle = stylex.create({
  card: {
    backgroundColor: colors.red,
  },
})

const callStyle = stylex.create({
  card: {
    backgroundColor: colors.green,
  },
})

function Editor() {
  return (
    <div>
      <div
        id="assign"
        {...stylex.props(actionStyle.card, assignStyle.card)}
      ></div>
      <div id="if" {...stylex.props(actionStyle.card, ifStyle.card)}></div>
      <div
        id="repeat"
        {...stylex.props(actionStyle.card, repeatStyle.card)}
      ></div>
      <div id="call" {...stylex.props(actionStyle.card, callStyle.card)}></div>
    </div>
  )
}

render(<Editor />, document.body)
