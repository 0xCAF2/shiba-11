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
          x: 606,
          y: 66,
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
          next: {
            block: {
              type: "controls_repeat_ext",
              id: "KINj*(kqDoLl`qZ#q*mT",
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
                            NUM: 3,
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
                    type: "div",
                    id: "G=5_I8]o(odQc],DU!0X",
                    inputs: {
                      CHILDREN: {
                        block: {
                          type: "style",
                          id: "Lk16eTFSJmT0L]AHw/0O",
                          fields: {
                            NAME: "height",
                          },
                          inputs: {
                            VALUE: {
                              block: {
                                type: "string",
                                id: "[T*r:eEk6qg7v@~$[79N",
                                fields: {
                                  VALUE: "40px",
                                },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: "style",
                              id: "XDv~x=DEHvdNO4MGNv|3",
                              fields: {
                                NAME: "padding-left",
                              },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: "string",
                                    id: "dz#q(=.Zre_x_~OA-Cf+",
                                    fields: {
                                      VALUE: "16px",
                                    },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: "style",
                                  id: "ai=;a24~%UavF`8[y=Q$",
                                  fields: {
                                    NAME: "margin-bottom",
                                  },
                                  inputs: {
                                    VALUE: {
                                      block: {
                                        type: "string",
                                        id: "TG#YUT9foCuhrQ9m!{rv",
                                        fields: {
                                          VALUE: "24px",
                                        },
                                      },
                                    },
                                  },
                                  next: {
                                    block: {
                                      type: "style",
                                      id: "vx/rMBF)x}EyWjCg)=V|",
                                      fields: {
                                        NAME: "display",
                                      },
                                      inputs: {
                                        VALUE: {
                                          block: {
                                            type: "string",
                                            id: "}fTiiBVOznv!K?{Gul6:",
                                            fields: {
                                              VALUE: "flex",
                                            },
                                          },
                                        },
                                      },
                                      next: {
                                        block: {
                                          type: "style",
                                          id: "n3}}/t0!YL^a?Ga9D0|a",
                                          fields: {
                                            NAME: "align-items",
                                          },
                                          inputs: {
                                            VALUE: {
                                              block: {
                                                type: "string",
                                                id: "$XyE0+qm:HWQ8zL@PwE3",
                                                fields: {
                                                  VALUE: "center",
                                                },
                                              },
                                            },
                                          },
                                          next: {
                                            block: {
                                              type: "controls_if",
                                              id: "0{~]sCK}.Nmvc/{5hYoG",
                                              extraState: {
                                                hasElse: true,
                                              },
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
                                                    id: "bd$6)%Cm.2+k{|=;ezzb",
                                                    fields: {
                                                      NAME: "color",
                                                    },
                                                    inputs: {
                                                      VALUE: {
                                                        block: {
                                                          type: "string",
                                                          id: "E|H-8i/ZxIhhuz92fz[%",
                                                          fields: {
                                                            VALUE: "black",
                                                          },
                                                        },
                                                      },
                                                    },
                                                    next: {
                                                      block: {
                                                        type: "style",
                                                        id: "=}(3:(^/O`*y/(w|;O`.",
                                                        fields: {
                                                          NAME: "background",
                                                        },
                                                        inputs: {
                                                          VALUE: {
                                                            block: {
                                                              type: "string",
                                                              id: "k11!ZJp/CKCe]P=[j[#_",
                                                              fields: {
                                                                VALUE:
                                                                  "linear-gradient(#a522, #e346)",
                                                              },
                                                            },
                                                          },
                                                        },
                                                        next: {
                                                          block: {
                                                            type: "on",
                                                            id: "lohinRaktJd{asd!FU3U",
                                                            fields: {
                                                              EVENT: "click",
                                                            },
                                                            inputs: {
                                                              HANDLER: {
                                                                block: {
                                                                  type: "variables_set",
                                                                  id: "AbiQMne@wu}!,JBn=hoY",
                                                                  fields: {
                                                                    VAR: {
                                                                      id: "03d61nXw|G^ye/;Vh4xG",
                                                                    },
                                                                  },
                                                                  inputs: {
                                                                    VALUE: {
                                                                      block: {
                                                                        type: "math_arithmetic",
                                                                        id: "rCro{_[acdUd~K|jFQN7",
                                                                        fields:
                                                                          {
                                                                            OP: "ADD",
                                                                          },
                                                                        inputs:
                                                                          {
                                                                            A: {
                                                                              block:
                                                                                {
                                                                                  type: "variables_get",
                                                                                  id: "#0e7=w+0y{5DFk7gwABS",
                                                                                  fields:
                                                                                    {
                                                                                      VAR: {
                                                                                        id: "03d61nXw|G^ye/;Vh4xG",
                                                                                      },
                                                                                    },
                                                                                },
                                                                            },
                                                                            B: {
                                                                              block:
                                                                                {
                                                                                  type: "math_number",
                                                                                  id: "lH{?0Q2IAo|w6O=)o?|J",
                                                                                  fields:
                                                                                    {
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
                                                    },
                                                  },
                                                },
                                                ELSE: {
                                                  block: {
                                                    type: "style",
                                                    id: ")(IH2X!;:C5b03c9P3I]",
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
                                                  type: "p",
                                                  id: "31GtSaZ1J3-Ef:lWatrX",
                                                  inputs: {
                                                    CHILDREN: {
                                                      block: {
                                                        type: "static_text",
                                                        id: "!TTNHc9xsJ+B2IoMq+Dq",
                                                        inputs: {
                                                          CONTENT: {
                                                            block: {
                                                              type: "string",
                                                              id: "RA6CjM2|v0qT2,x9q.DN",
                                                              fields: {
                                                                VALUE:
                                                                  "Hello, World ",
                                                              },
                                                            },
                                                          },
                                                        },
                                                        next: {
                                                          block: {
                                                            type: "static_text",
                                                            id: "_3Ia0K?X`G]-*pw#dS7T",
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
              },
            },
          },
        },
        {
          type: "variables_set",
          id: "nN[l;}N)#L8(G?y.*=$*",
          x: -15,
          y: 62,
          fields: {
            VAR: {
              id: "03d61nXw|G^ye/;Vh4xG",
            },
          },
          inputs: {
            VALUE: {
              block: {
                type: "math_number",
                id: "=7Qp2pa6q=;VNq?VPGQ|",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
          next: {
            block: {
              type: "div",
              id: "Q{NgLn1fcO?kgS=lp}T3",
              inputs: {
                CHILDREN: {
                  block: {
                    type: "style",
                    id: "rW0fbn..5Tri^+wayr;}",
                    fields: {
                      NAME: "width",
                    },
                    inputs: {
                      VALUE: {
                        block: {
                          type: "string",
                          id: "Xeu[+6uO_W/NkmqJ+A_z",
                          fields: {
                            VALUE: "80px",
                          },
                        },
                      },
                    },
                    next: {
                      block: {
                        type: "style",
                        id: "+mh31Bwf2^BLJR7:UYWZ",
                        fields: {
                          NAME: "height",
                        },
                        inputs: {
                          VALUE: {
                            block: {
                              type: "string",
                              id: "s,6LbjL6nj]t2,nS4YyP",
                              fields: {
                                VALUE: "40px",
                              },
                            },
                          },
                        },
                        next: {
                          block: {
                            type: "style",
                            id: "c:VIwFHOm^~M?IPp*1jC",
                            fields: {
                              NAME: "padding",
                            },
                            inputs: {
                              VALUE: {
                                block: {
                                  type: "string",
                                  id: "Q`GDYJP95{PwRJeY,aH=",
                                  fields: {
                                    VALUE: "24px",
                                  },
                                },
                              },
                            },
                            next: {
                              block: {
                                type: "dynamic_text",
                                id: "p#zp17xYG]aiN1DNyFNG",
                                inputs: {
                                  CONTENT: {
                                    block: {
                                      type: "variables_get",
                                      id: "#jCl)AHR5ZSW9-NwRg9T",
                                      fields: {
                                        VAR: {
                                          id: "03d61nXw|G^ye/;Vh4xG",
                                        },
                                      },
                                    },
                                  },
                                },
                                next: {
                                  block: {
                                    type: "static_text",
                                    id: "M@^}a*~RfMyS+Gkvm(EG",
                                    inputs: {
                                      CONTENT: {
                                        block: {
                                          type: "string",
                                          id: "=u}E)_H|?CmeO;KqoZit",
                                          fields: {
                                            VALUE: " times clicked.",
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
      {
        name: "counter",
        id: "03d61nXw|G^ye/;Vh4xG",
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
