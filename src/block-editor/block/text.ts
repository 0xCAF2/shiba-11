import * as Blockly from "blockly"

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "static_text",
    message0: "static %1",
    args0: [
      {
        type: "input_value",
        name: "CONTENT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
  },
  {
    type: "dynamic_text",
    message0: "dynamic %1",
    args0: [
      {
        type: "input_value",
        name: "CONTENT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
  },
])
