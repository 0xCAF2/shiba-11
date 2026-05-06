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
          inputs: {
            VALUE: {
              shadow: {
                kind: "block",
                type: "math_number",
              },
            },
          },
        },
        {
          kind: "block",
          type: "variables_get",
        },
        {
          kind: "button",
          text: "Create variable",
          callbackKey: "createVariableButtonPressed",
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
          inputs: {
            TIMES: {
              shadow: {
                kind: "block",
                type: "math_number",
              },
            },
          },
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
          inputs: {
            A: {
              shadow: {
                kind: "block",
                type: "variables_get",
              },
            },
            B: {
              shadow: {
                kind: "block",
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_modulo",
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      contents: [
        {
          kind: "block",
          type: "lists_subscript",
          inputs: {
            LIST: {
              shadow: {
                type: "variables_get",
              },
            },
            INDEX: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "0",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_set",
          inputs: {
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "0",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_create_empty",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
        },
        {
          kind: "block",
          type: "lists_split",
        },
        {
          kind: "block",
          type: "lists_length",
          inputs: {
            VALUE: {
              shadow: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_isEmpty",
          inputs: {
            VALUE: {
              shadow: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_indexOf",
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
      ],
    },
    {
      kind: "category",
      name: "Content",
      contents: [
        {
          kind: "block",
          type: "static_text",
          inputs: {
            CONTENT: {
              shadow: {
                kind: "block",
                type: "text_content",
                fields: {
                  TEXT: "Hello, World.",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "dynamic_text",
          inputs: {
            CONTENT: {
              shadow: {
                kind: "block",
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "clear",
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
          inputs: {
            VALUE: {
              shadow: {
                type: "style_value",
                fields: {
                  VALUE: "blue",
                },
              },
            },
          },
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
