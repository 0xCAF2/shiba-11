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
          type: "variables_set",
          id: "RSiYB2%Lw`$8g-SuMF4C",
          x: 175,
          y: 16,
          fields: {
            VAR: {
              id: "`}Hs=hgOobnX2f7?V|}#",
            },
          },
          inputs: {
            VALUE: {
              block: {
                type: "math_number",
                id: "EmbP.Fge*gV?7StzAfX[",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
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
                      type: "controls_if",
                      id: "0{~]sCK}.Nmvc/{5hYoG",
                      inputs: {
                        IF0: {
                          block: {
                            type: "logic_compare",
                            id: "}Qs,y_{Sq1YU-)Y!I+a[",
                            fields: {
                              OP: "EQ",
                            },
                            inputs: {
                              A: {
                                block: {
                                  type: "math_modulo",
                                  id: "K^^6vjRmW?}0I};`:Hw^",
                                  inputs: {
                                    DIVIDEND: {
                                      block: {
                                        type: "variables_get",
                                        id: "3og{dITNnZ~oVF-iD!L[",
                                        fields: {
                                          VAR: {
                                            id: "`}Hs=hgOobnX2f7?V|}#",
                                          },
                                        },
                                      },
                                    },
                                    DIVISOR: {
                                      block: {
                                        type: "math_number",
                                        id: ";+]S~gl)nE^PzkY#-}x~",
                                        fields: {
                                          NUM: 2,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              B: {
                                block: {
                                  type: "math_number",
                                  id: "1;lUKl]MmKUntY=IW2Vj",
                                  fields: {
                                    NUM: 0,
                                  },
                                },
                              },
                            },
                          },
                        },
                        DO0: {
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
                                  VALUE: "Hello, World ",
                                },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: "text",
                              id: "Vv3.aRx}gmq|GXc|}~g?",
                              inputs: {
                                CONTENT: {
                                  block: {
                                    type: "variables_get",
                                    id: "MCaCLv#54_KVnoSC-sd7",
                                    fields: {
                                      VAR: {
                                        id: "`}Hs=hgOobnX2f7?V|}#",
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
                next: {
                  block: {
                    type: "variables_set",
                    id: "rulJbuQ5qESzL`RAoS1,",
                    fields: {
                      VAR: {
                        id: "`}Hs=hgOobnX2f7?V|}#",
                      },
                    },
                    inputs: {
                      VALUE: {
                        block: {
                          type: "math_arithmetic",
                          id: "v}3P(d:_}CI8xUz4xqmo",
                          fields: {
                            OP: "ADD",
                          },
                          inputs: {
                            A: {
                              block: {
                                type: "variables_get",
                                id: "/lioW65j7Rk2|qe4j0_m",
                                fields: {
                                  VAR: {
                                    id: "`}Hs=hgOobnX2f7?V|}#",
                                  },
                                },
                              },
                            },
                            B: {
                              block: {
                                type: "math_number",
                                id: "l@(zSB#N3nVEq+*?+l?Q",
                                fields: {
                                  NUM: 1,
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
    variables: [
      {
        name: "i",
        id: "`}Hs=hgOobnX2f7?V|}#",
      },
    ],
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
