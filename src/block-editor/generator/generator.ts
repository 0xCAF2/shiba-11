import * as Blockly from "blockly"

export const generator = new Blockly.CodeGenerator("Shiba11")

generator.scrub_ = function (_block, code, _opt_thisOnly) {
  const nextBlock = _block.nextConnection && _block.nextConnection.targetBlock()
  const nextCode = _opt_thisOnly ? "" : this.blockToCode(nextBlock)
  if (!code.endsWith(",") && _block.getParent() === null) {
    code = code + ","
  }
  if (nextBlock) {
    return code + nextCode
  }
  return code
}

generator.finish = function (code) {
  const start = JSON.stringify([1, "#", "0.0.1"])
  const end = JSON.stringify([1, "end"])
  return `[${start},${code}${end}]`
}

export const generatorState: {
  indent: number
} = {
  indent: 1,
}
