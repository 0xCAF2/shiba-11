import * as Blockly from "blockly"

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "lists_subscript",
    message0: "%1 [ %2 ]",
    args0: [
      {
        type: "input_value",
        name: "LIST",
      },
      {
        type: "input_value",
        name: "INDEX",
      },
    ],
    output: null,
    colour: 260,
  },
  {
    type: "lists_set",
    message0: "set %1 to %2",
    args0: [
      {
        type: "input_value",
        name: "LIST",
        check: ["Array", "lists_subscript"],
      },
      {
        type: "input_value",
        name: "TO",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 260,
  },
])
