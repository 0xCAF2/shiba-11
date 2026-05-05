import * as Blockly from "blockly"

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "style",
    message0: "style %1 : %2",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "color",
      },
      {
        type: "input_value",
        name: "VALUE",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "Set a style property for the current HTML element",
  },
  {
    type: "style_value",
    message0: "%1",
    args0: [
      {
        type: "field_input",
        name: "VALUE",
        text: "blue",
      },
    ],
    output: "string",
  },
])
