import * as Blockly from "blockly"
import DarkTheme from "@blockly/theme-dark"
import { toolbox, shiba11Generator } from "../block-editor"
import { codeSignal } from "./code"
import { effect } from "@preact/signals"

const workspace = Blockly.inject("blockly-div", {
  theme: DarkTheme,
  toolbox,
  oneBasedIndex: false,
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
          id: "@=b:I[6)W;Wu!lwgctd.",
          x: -24,
          y: -55,
          fields: {
            VAR: {
              id: "ZfPm7+`S82-|UN}y*I*X",
            },
          },
          inputs: {
            VALUE: {
              block: {
                type: "string",
                id: "8_.%iifJBNc4$r_%}+cx",
                fields: {
                  VALUE: "px",
                },
              },
            },
          },
          next: {
            block: {
              type: "variables_set",
              id: "3L~M}uYPpe@Uv[b^DM,i",
              fields: {
                VAR: {
                  id: "03d61nXw|G^ye/;Vh4xG",
                },
              },
              inputs: {
                VALUE: {
                  shadow: {
                    type: "math_number",
                    id: "9;~-)I-0,yyE(dOVOR=c",
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
                        id: "cc:axdyRV}HvTau[rF0m",
                        fields: {
                          NAME: "padding",
                        },
                        inputs: {
                          VALUE: {
                            shadow: {
                              type: "style_value",
                              id: "3F+pM}onL}axlGG`e:(9",
                              fields: {
                                VALUE: "blue",
                              },
                            },
                            block: {
                              type: "math_arithmetic",
                              id: "A__Y[=RHWl7Z?h6}E{Z^",
                              fields: {
                                OP: "ADD",
                              },
                              inputs: {
                                A: {
                                  shadow: {
                                    type: "variables_get",
                                    id: "HT*(rXcf~T;#XcYA~FXW",
                                    fields: {
                                      VAR: {
                                        id: "03d61nXw|G^ye/;Vh4xG",
                                        name: "counter",
                                        type: "",
                                      },
                                    },
                                  },
                                },
                                B: {
                                  shadow: {
                                    type: "math_number",
                                    id: "?iFEfexOxt,*/7P):eL.",
                                    fields: {
                                      NUM: 0,
                                    },
                                  },
                                  block: {
                                    type: "variables_get",
                                    id: ".P@aL+i`i+ON4=z6k[-[",
                                    fields: {
                                      VAR: {
                                        id: "ZfPm7+`S82-|UN}y*I*X",
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
                            type: "dynamic_text",
                            id: "H0e~4?~H.#HH+gY*hJ+Y",
                            inputs: {
                              CONTENT: {
                                shadow: {
                                  type: "variables_get",
                                  id: "rlX:BJgFy.~[fYb77}E6",
                                  fields: {
                                    VAR: {
                                      id: "03d61nXw|G^ye/;Vh4xG",
                                      name: "counter",
                                      type: "",
                                    },
                                  },
                                },
                              },
                            },
                            next: {
                              block: {
                                type: "static_text",
                                id: "QQ!-K4VFi^][iP!VG_hM",
                                inputs: {
                                  CONTENT: {
                                    shadow: {
                                      type: "text_content",
                                      id: "}uRA,0%@a.zk#@pNO(0P",
                                      fields: {
                                        TEXT: " times clicked.",
                                      },
                                    },
                                  },
                                },
                                next: {
                                  block: {
                                    type: "p",
                                    id: "X^((;aS.sj8ysv0Tg#I*",
                                    inputs: {
                                      CHILDREN: {
                                        block: {
                                          type: "static_text",
                                          id: "2+c%e~[UR*p,(yEzLRzk",
                                          inputs: {
                                            CONTENT: {
                                              shadow: {
                                                type: "text_content",
                                                id: "EsgyrI2I(WpG(0[A^7@h",
                                                fields: {
                                                  TEXT: "Last clicked: ",
                                                },
                                              },
                                            },
                                          },
                                          next: {
                                            block: {
                                              type: "dynamic_text",
                                              id: "v$sA?=Jk+qeS=P.vsuAu",
                                              inputs: {
                                                CONTENT: {
                                                  shadow: {
                                                    type: "variables_get",
                                                    id: "P9t9j6?XZ8lE=[?7Pm[A",
                                                    fields: {
                                                      VAR: {
                                                        id: "XmOtqtHOprk=S5s$9F,~",
                                                        name: "item",
                                                        type: "",
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
          id: "x(Z]%duSEDm^HY[%tNEr",
          x: 456,
          y: 21,
          fields: {
            VAR: {
              id: "`}Hs=hgOobnX2f7?V|}#",
            },
          },
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                id: "DOu/y:_,Pb5wpQdEJB=l",
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
                    id: "v!/=?/(d-_aS1][f68u]",
                    fields: {
                      OP: "MULTIPLY",
                    },
                    inputs: {
                      A: {
                        shadow: {
                          type: "variables_get",
                          id: "2Pgv(GS-w;2kn!.Q!%Xh",
                          fields: {
                            VAR: {
                              id: "LPg*+PWuPfg~~!okiy$!",
                              name: "item",
                              type: "",
                            },
                          },
                        },
                        block: {
                          type: "math_number",
                          id: "^C]aHQ}s_NBAv}A=FW7L",
                          fields: {
                            NUM: 3,
                          },
                        },
                      },
                      B: {
                        shadow: {
                          type: "math_number",
                          id: "H|74Pa5;KPW}V[%2e/B:",
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
                          id: "?FE0pCEz_T2pwqIkj[FC",
                          fields: {
                            NAME: "height",
                          },
                          inputs: {
                            VALUE: {
                              shadow: {
                                type: "style_value",
                                id: "TQ0/`P4iIL8)^@!p,eih",
                                fields: {
                                  VALUE: "40px",
                                },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: "style",
                              id: ",To.W;QYF@(t+^Q.Vgp2",
                              fields: {
                                NAME: "display",
                              },
                              inputs: {
                                VALUE: {
                                  shadow: {
                                    type: "style_value",
                                    id: "R3[c8_yO?na=pk{uQL@=",
                                    fields: {
                                      VALUE: "flex",
                                    },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: "style",
                                  id: "4lqH4HPAg27%MM[QLWK:",
                                  fields: {
                                    NAME: "align-items",
                                  },
                                  inputs: {
                                    VALUE: {
                                      shadow: {
                                        type: "style_value",
                                        id: ";(Rb}ikxrM9_dk^UF6ss",
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
                                            id: "vdbL!6Js2mH(Z]^)3}Nc",
                                            fields: {
                                              NAME: "background",
                                            },
                                            inputs: {
                                              VALUE: {
                                                shadow: {
                                                  type: "style_value",
                                                  id: "J|p2*=WWNk_(X/IoV3b)",
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
                                                  VALUE: {
                                                    block: {
                                                      type: "variables_get",
                                                      id: "sW_JjTI?jP9#q5uPaB{2",
                                                      fields: {
                                                        VAR: {
                                                          id: "`}Hs=hgOobnX2f7?V|}#",
                                                        },
                                                      },
                                                    },
                                                  },
                                                  HANDLER: {
                                                    block: {
                                                      type: "variables_set",
                                                      id: "oLDs[o)qhPXl*hRFjR[J",
                                                      fields: {
                                                        VAR: {
                                                          id: "03d61nXw|G^ye/;Vh4xG",
                                                        },
                                                      },
                                                      inputs: {
                                                        VALUE: {
                                                          shadow: {
                                                            type: "math_number",
                                                            id: "Gm.ba2e^J@L577hR,(1g",
                                                            fields: {
                                                              NUM: 0,
                                                            },
                                                          },
                                                          block: {
                                                            type: "math_arithmetic",
                                                            id: "Nt!-~eSgg0mThSR|15*l",
                                                            fields: {
                                                              OP: "ADD",
                                                            },
                                                            inputs: {
                                                              A: {
                                                                shadow: {
                                                                  type: "variables_get",
                                                                  id: "WcQ1o|%IK*VPV)]e#b:f",
                                                                  fields: {
                                                                    VAR: {
                                                                      id: "03d61nXw|G^ye/;Vh4xG",
                                                                      name: "counter",
                                                                      type: "",
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              B: {
                                                                shadow: {
                                                                  type: "math_number",
                                                                  id: "Tmptdm_bA^6x^$uC[n~8",
                                                                  fields: {
                                                                    NUM: 1,
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
                                                          id: "1vJ^t%-x*W5v!{EH6F}[",
                                                          fields: {
                                                            VAR: {
                                                              id: "XmOtqtHOprk=S5s$9F,~",
                                                            },
                                                          },
                                                          inputs: {
                                                            VALUE: {
                                                              shadow: {
                                                                type: "math_number",
                                                                id: "Ky^XiDu%?)C2$WcLE;/i",
                                                                fields: {
                                                                  NUM: 0,
                                                                },
                                                              },
                                                              block: {
                                                                type: "variables_get",
                                                                id: "J[~v1*|~~+s,bMZ/eI4k",
                                                                fields: {
                                                                  VAR: {
                                                                    id: "LPg*+PWuPfg~~!okiy$!",
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
                                            id: "gR0=qXral-Io_.LM#tYN",
                                            fields: {
                                              NAME: "color",
                                            },
                                            inputs: {
                                              VALUE: {
                                                shadow: {
                                                  type: "style_value",
                                                  id: "FE!s0O67{^A-tnpH=^BC",
                                                  fields: {
                                                    VALUE: "blue",
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
                                                id: "4z_:([@USOnkuQTT^4Nl",
                                                inputs: {
                                                  CONTENT: {
                                                    shadow: {
                                                      type: "text_content",
                                                      id: "@id!:!.GZZ/0OGnu/pcc",
                                                      fields: {
                                                        TEXT: "Hello, World ",
                                                      },
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: "static_text",
                                                    id: "URqb^k+e?gVV^3S.e`j9",
                                                    inputs: {
                                                      CONTENT: {
                                                        shadow: {
                                                          type: "text_content",
                                                          id: "BbWY%F$1s2]M?c4=mBuS",
                                                          fields: {
                                                            TEXT: "Hello, World.",
                                                          },
                                                        },
                                                        block: {
                                                          type: "variables_get",
                                                          id: "nspJ96yT|LY0]|.FFj_[",
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
                                              id: "~h;e?qMTvG2=DDR^K=RN",
                                              fields: {
                                                VAR: {
                                                  id: "`}Hs=hgOobnX2f7?V|}#",
                                                },
                                              },
                                              inputs: {
                                                VALUE: {
                                                  shadow: {
                                                    type: "math_number",
                                                    id: "/,ft=$We:x`Y$[ep/uhH",
                                                    fields: {
                                                      NUM: 0,
                                                    },
                                                  },
                                                  block: {
                                                    type: "math_arithmetic",
                                                    id: "O]#mxM*nGa^td,]U_!}y",
                                                    fields: {
                                                      OP: "ADD",
                                                    },
                                                    inputs: {
                                                      A: {
                                                        shadow: {
                                                          type: "variables_get",
                                                          id: "cgLbBc!=xx:/;oM@]rPO",
                                                          fields: {
                                                            VAR: {
                                                              id: "`}Hs=hgOobnX2f7?V|}#",
                                                              name: "i",
                                                              type: "",
                                                            },
                                                          },
                                                        },
                                                      },
                                                      B: {
                                                        shadow: {
                                                          type: "math_number",
                                                          id: "lL%C)0~~W@(?wpboBYDh",
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
      {
        name: "px",
        id: "ZfPm7+`S82-|UN}y*I*X",
      },
      {
        name: "eValue",
        id: "LPg*+PWuPfg~~!okiy$!",
      },
      {
        name: "item",
        id: "XmOtqtHOprk=S5s$9F,~",
      },
    ],
  },
  workspace,
)

workspace.registerButtonCallback("createVariableButtonPressed", () => {
  Blockly.Variables.createVariableButtonHandler(workspace)
})

workspace.addChangeListener(() => {
  const code = shiba11Generator.workspaceToCode(workspace)
  codeSignal.value = code
  document.getElementById("qr-code-div")!.innerHTML = ""
})

effect(() => {
  console.log(codeSignal.value)
  console.log(Blockly.serialization.workspaces.save(workspace))
})
