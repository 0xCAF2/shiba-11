export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Core",
      contents: [
        {
          kind: "block",
          type: "string",
        },
      ],
    },
    {
      kind: "category",
      name: "HTML",
      contents: [
        {
          kind: "block",
          type: "p",
        },
        {
          kind: "block",
          type: "text",
        },
      ],
    },
    {
      kind: "category",
      name: "Control",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
      ],
    },
    {
      kind: "category",
      name: "Logic",
      contents: [
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
      ],
    },
  ],
}
