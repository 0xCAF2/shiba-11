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

export const generatorState: {
  indent: number
} = {
  indent: 1,
}
