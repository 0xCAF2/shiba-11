import * as Blockly from "blockly"

export const generator = new Blockly.CodeGenerator("Shiba11")

generator.scrub_ = function (_block, code, _opt_thisOnly) {
  const nextBlock = _block.nextConnection && _block.nextConnection.targetBlock()
  const nextCode = _opt_thisOnly ? "" : this.blockToCode(nextBlock)
  if (!code.toString().endsWith(",") && _block.getParent() === null) {
    code = code + ","
  }
  if (nextBlock) {
    return code + nextCode
  }
  return code
}

generator.finish = function (code) {
  const start = JSON.stringify([1, "html"])
  const end = JSON.stringify([1, "end"])
  return `[${start},${code}${end}]`
}

export const generatorState: {
  indent: number
} = {
  indent: 2, // all commands are wrapped in a html block
}

export function generateCodeForTag(tag: string) {
  generator.forBlock[tag] = function (block) {
    generatorState.indent++
    const stmt = generator.statementToCode(block, "CHILDREN") || ""
    generatorState.indent--
    return JSON.stringify([generatorState.indent, tag]) + "," + stmt
  }
}
