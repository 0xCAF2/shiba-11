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
        {
          kind: "block",
          type: "variables_set",
        },
        {
          kind: "block",
          type: "variables_get",
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
    {
      kind: "category",
      name: "Loops",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      contents: [
        {
          kind: "block",
          type: "math_number",
        },
        {
          kind: "block",
          type: "math_arithmetic",
        },
        {
          kind: "block",
          type: "math_modulo",
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
    {
      kind: "category",
      name: "Events",
      contents: [
        {
          kind: "block",
          type: "on",
        },
      ],
    },
  ],
}
