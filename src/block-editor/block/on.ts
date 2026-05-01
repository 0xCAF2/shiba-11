import * as Blockly from "blockly"

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "on",
    message0: "on %1 : %2",
    args0: [
      {
        type: "field_input",
        name: "EVENT",
        text: "click",
      },
      {
        type: "input_statement",
        name: "HANDLER",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "Define an event handler for the current HTML element",
  },
])
