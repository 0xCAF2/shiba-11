import * as Blockly from "blockly"
import DarkTheme from "@blockly/theme-dark"
import { toolbox, shiba11Generator } from "../block-editor"
import { codeSignal } from "./code"
import { effect } from "@preact/signals"

const workspace = Blockly.inject("blockly-div", {
  theme: DarkTheme,
  toolbox,
  renderer: "zelos",
  zoom: {
    startScale: 0.7,
  },
  sounds: false,
})

Blockly.serialization.workspaces.load(
  {
    blocks: {
      languageVersion: 0,
      blocks: [
        {
          type: "controls_repeat_ext",
          id: "KINj*(kqDoLl`qZ#q*mT",
          x: 177,
          y: 93,
          inputs: {
            TIMES: {
              block: {
                type: "math_arithmetic",
                id: "[e3^yL-sgcn46V.#pJJe",
                fields: {
                  OP: "ADD",
                },
                inputs: {
                  A: {
                    block: {
                      type: "math_number",
                      id: "@!s@k,x1*0[(Hk8pK^vt",
                      fields: {
                        NUM: 4,
                      },
                    },
                  },
                  B: {
                    block: {
                      type: "math_number",
                      id: "L,~VY:=|8Smtf$Sjm[TY",
                      fields: {
                        NUM: 2,
                      },
                    },
                  },
                },
              },
            },
            DO: {
              block: {
                type: "p",
                id: "31GtSaZ1J3-Ef:lWatrX",
                inputs: {
                  CHILDREN: {
                    block: {
                      type: "style",
                      id: "3.dl()jN9=RtL-dTKHil",
                      fields: {
                        NAME: "color",
                      },
                      inputs: {
                        VALUE: {
                          block: {
                            type: "string",
                            id: "=Zn/H6](kh,^:puDIe6f",
                            fields: {
                              VALUE: "dodgerblue",
                            },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: "text",
                          id: "!TTNHc9xsJ+B2IoMq+Dq",
                          inputs: {
                            CONTENT: {
                              block: {
                                type: "string",
                                id: "RA6CjM2|v0qT2,x9q.DN",
                                fields: {
                                  VALUE: "Hello, World.",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ],
    },
  },
  workspace,
)

workspace.addChangeListener(() => {
  const code = shiba11Generator.workspaceToCode(workspace)
  codeSignal.value = code
  document.getElementById("qr-code-div")!.innerHTML = ""
})

effect(() => {
  console.log(codeSignal.value)
  console.log(Blockly.serialization.workspaces.save(workspace))
})
