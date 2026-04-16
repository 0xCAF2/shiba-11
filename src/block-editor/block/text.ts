import * as Blockly from "blockly"

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "text",
    message0: "%1",
    args0: [
      {
        type: "input_value",
        name: "CONTENT",
        check: "String",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
  },
])
