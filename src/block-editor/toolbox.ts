export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Core",
      contents: [
        {
          kind: "block",
          type: "math_number",
        },
        {
          kind: "block",
          type: "string",
        },
      ],
    },
    {
      kind: "category",
      name: "Logic",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        // {
        //   kind: "block",
        //   type: "logic_compare",
        // },
        // {
        //   kind: "block",
        //   type: "logic_operation",
        // },
        {
          kind: "block",
          type: "logic_boolean",
        },
      ],
    },
    {
      kind: "category",
      name: "Loop",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
        },
      ],
    },
    {
      kind: "category",
      name: "HTML",
      contents: [
        {
          kind: "block",
          type: "div",
        },
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
      name: "CSS",
      contents: [
        {
          kind: "block",
          type: "style",
        },
      ],
    },
  ],
}
