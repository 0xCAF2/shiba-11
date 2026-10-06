import * as Blockly from "blockly"
import DarkTheme from "@blockly/theme-dark"
import { toolbox, shiba11Generator } from "../../../src/block-editor"
import { codeSignal } from "../../../src/code"
import { effect } from "@preact/signals"
import { Loader } from "../../loader"

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

const loader = new Loader(workspace, "en")
const code = new Map<string, any>()
code.set("en", {
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
                              VALUE: "gray",
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
                                                  VALUE: "gray",
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
})
code.set("memorize", {
  blocks: {
    languageVersion: 0,
    blocks: [
      {
        type: "variables_set",
        id: "KW(n|B3:Ut~|uly)`Seu",
        x: 44,
        y: 46,
        fields: {
          VAR: {
            id: "mqw5OsFG:A_8J.+yavl3",
          },
        },
        inputs: {
          VALUE: {
            shadow: {
              type: "math_number",
              id: "R`sBhFPg]vvsBk(w+V^h",
              fields: {
                NUM: 1,
              },
            },
          },
        },
        next: {
          block: {
            type: "variables_set",
            id: "pncUB9)db=JQmNOtJKJZ",
            fields: {
              VAR: {
                id: ":BSb/SPJa7kpfA2gP-;i",
              },
            },
            inputs: {
              VALUE: {
                shadow: {
                  type: "math_number",
                  id: "P9!;_3-@XhJ4KQ|%P/)o",
                  fields: {
                    NUM: 0,
                  },
                },
                block: {
                  type: "math_arithmetic",
                  id: "3(SNZ,9*Ryc$(g*7`BgV",
                  fields: {
                    OP: "MULTIPLY",
                  },
                  inputs: {
                    A: {
                      shadow: {
                        type: "variables_get",
                        id: "o.!/)gQR7]6Q9qV.K3Pd",
                        fields: {
                          VAR: {
                            id: "mqw5OsFG:A_8J.+yavl3",
                            name: "candy",
                            type: "",
                          },
                        },
                      },
                    },
                    B: {
                      shadow: {
                        type: "math_number",
                        id: "QlcRKecTpjs=kOx}oYC-",
                        fields: {
                          NUM: 3,
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
        type: "p",
        id: "%d*L(e:dRTs/~L/N:z`g",
        x: 43,
        y: 203,
        inputs: {
          CHILDREN: {
            block: {
              type: "static_text",
              id: "VCNkH)5a(1[q0^/*_Hc}",
              inputs: {
                CONTENT: {
                  shadow: {
                    type: "text_content",
                    id: "36J|,eHQg#c1}#,doSL[",
                    fields: {
                      TEXT: "$",
                    },
                  },
                },
              },
              next: {
                block: {
                  type: "static_text",
                  id: "FkPFl/neD+*T.FYP8A6t",
                  inputs: {
                    CONTENT: {
                      shadow: {
                        type: "text_content",
                        id: "L5R7Vq8Z-P)|t6s=@@NI",
                        fields: {
                          TEXT: "Hello, World.",
                        },
                      },
                      block: {
                        type: "variables_get",
                        id: "wr%jfUkS%cyLR*RtyYJ1",
                        fields: {
                          VAR: {
                            id: ":BSb/SPJa7kpfA2gP-;i",
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
      name: "candy",
      id: "mqw5OsFG:A_8J.+yavl3",
    },
    {
      name: "total",
      id: ":BSb/SPJa7kpfA2gP-;i",
    },
    {
      name: "項目",
      id: "uZ09oDA.Rp5W-MFyg.zY",
    },
  ],
})
code.set("conditional", {
  blocks: {
    languageVersion: 0,
    blocks: [
      {
        type: "variables_set",
        id: "H.SL/5+A-wG6[7l@GFTZ",
        x: 47,
        y: -134,
        fields: {
          VAR: {
            id: "UQp(qJftA4/~AV}|A9jT",
          },
        },
        inputs: {
          VALUE: {
            shadow: {
              type: "math_number",
              id: "EO_8=8R/!Zt6@AU;ODfD",
              fields: {
                NUM: 5,
              },
            },
          },
        },
        next: {
          block: {
            type: "variables_set",
            id: "luV:fh4bE^!2dEvzPxYM",
            fields: {
              VAR: {
                id: "(M97CdVXp`G*H?[*?xEN",
              },
            },
            inputs: {
              VALUE: {
                shadow: {
                  type: "math_number",
                  id: "G1K)|w@@cgxGd-#4,6Td",
                  fields: {
                    NUM: 100,
                  },
                },
              },
            },
          },
        },
      },
      {
        type: "p",
        id: "M:VO+HWqLMs)yi@@h~Ja",
        x: -4,
        y: 11,
        inputs: {
          CHILDREN: {
            block: {
              type: "controls_if",
              id: ";4t_(z.c5BWgY;(^1isT",
              extraState: {
                hasElse: true,
              },
              inputs: {
                IF0: {
                  block: {
                    type: "logic_compare",
                    id: "+$!`O~;dH11PHM07:_j{",
                    fields: {
                      OP: "GT",
                    },
                    inputs: {
                      A: {
                        block: {
                          type: "variables_get",
                          id: "i.4B#ztaY5XNXAQvFiO)",
                          fields: {
                            VAR: {
                              id: "UQp(qJftA4/~AV}|A9jT",
                            },
                          },
                        },
                      },
                      B: {
                        block: {
                          type: "math_number",
                          id: "U7+c*5i`BqVR9L)l-gGU",
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
                    type: "static_text",
                    id: "]/=|EYFDS9K!uzY*vaS~",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "LryU0{KPfGF6QNDwu.cM",
                          fields: {
                            TEXT: "Hello, World.",
                          },
                        },
                        block: {
                          type: "math_arithmetic",
                          id: "$GFub|tO^`6e)1(IJ/@;",
                          fields: {
                            OP: "DIVIDE",
                          },
                          inputs: {
                            A: {
                              shadow: {
                                type: "variables_get",
                                id: "oJ4s.-H~m[kC_.A$l({h",
                                fields: {
                                  VAR: {
                                    id: "(M97CdVXp`G*H?[*?xEN",
                                    name: "total_amount",
                                    type: "",
                                  },
                                },
                              },
                            },
                            B: {
                              shadow: {
                                type: "math_number",
                                id: "8h^49.:iaC!9Z|puBZ;I",
                                fields: {
                                  NUM: 1,
                                },
                              },
                              block: {
                                type: "variables_get",
                                id: "%|u-S*=n(5T4(ilFt5p}",
                                fields: {
                                  VAR: {
                                    id: "UQp(qJftA4/~AV}|A9jT",
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
                    type: "static_text",
                    id: "$o0@7]A!l)`M2|@d(N_=",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "u}o+r`2MZb*kHT|@:VK2",
                          fields: {
                            TEXT: "Cannot divide by zero.",
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
        type: "p",
        id: "*0@98/}QPl@s6MQ!v=d.",
        x: 52,
        y: 412,
        inputs: {
          CHILDREN: {
            block: {
              type: "controls_if",
              id: "2{P*nw$/(GI!l%}~:?Rf",
              extraState: {
                elseIfCount: 1,
              },
              inputs: {
                IF0: {
                  block: {
                    type: "logic_compare",
                    id: ":bvLiHLrx$v0y*sA0XED",
                    fields: {
                      OP: "EQ",
                    },
                    inputs: {
                      A: {
                        block: {
                          type: "variables_get",
                          id: "|X.fL;d%bLnrEHQdJ=F*",
                          fields: {
                            VAR: {
                              id: "_S[=^AQX=!m@4A^GaxVI",
                            },
                          },
                        },
                      },
                      B: {
                        block: {
                          type: "string",
                          id: ".!g+h::IrQSV2`kw=?9y",
                          fields: {
                            VALUE: "sunny",
                          },
                        },
                      },
                    },
                  },
                },
                DO0: {
                  block: {
                    type: "static_text",
                    id: "tAXL4:@F%]0,|J{bNMZ1",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "LryU0{KPfGF6QNDwu.cM",
                          fields: {
                            TEXT: "Let's go for a walk.",
                          },
                        },
                      },
                    },
                  },
                },
                IF1: {
                  block: {
                    type: "logic_compare",
                    id: "?2p+ur!q+/VVTF3-?bh4",
                    fields: {
                      OP: "EQ",
                    },
                    inputs: {
                      A: {
                        block: {
                          type: "variables_get",
                          id: "E)S7s-?!]s6Alc!H=.f.",
                          fields: {
                            VAR: {
                              id: "_S[=^AQX=!m@4A^GaxVI",
                            },
                          },
                        },
                      },
                      B: {
                        block: {
                          type: "string",
                          id: "$[-:p2RLFcwls@oOGVoS",
                          fields: {
                            VALUE: "rainy",
                          },
                        },
                      },
                    },
                  },
                },
                DO1: {
                  block: {
                    type: "static_text",
                    id: "%7wKHS~Nxy4c@WUs7Bs5",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "_S[LrBLIhY!gX,heQg(U",
                          fields: {
                            TEXT: "Shall we read the book at home?",
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
        id: ":=F2+@r0Ctv3x:e+8yNC",
        x: 53,
        y: 333,
        fields: {
          VAR: {
            id: "_S[=^AQX=!m@4A^GaxVI",
          },
        },
        inputs: {
          VALUE: {
            shadow: {
              type: "math_number",
              id: "?x%(0VQ+La`=0k}1fem:",
              fields: {
                NUM: 0,
              },
            },
            block: {
              type: "string",
              id: "Jc)}$C/rGt0dlD.@o~#$",
              fields: {
                VALUE: "sunny",
              },
            },
          },
        },
      },
    ],
  },
  variables: [
    {
      name: "number_of_people",
      id: "UQp(qJftA4/~AV}|A9jT",
    },
    {
      name: "total_amount",
      id: "(M97CdVXp`G*H?[*?xEN",
    },
    {
      name: "weather",
      id: "_S[=^AQX=!m@4A^GaxVI",
    },
  ],
})

loader.loadWorkspace(code)

workspace.registerButtonCallback("createVariableButtonPressed", () => {
  Blockly.Variables.createVariableButtonHandler(workspace)
})

workspace.addChangeListener(() => {
  const code = shiba11Generator.workspaceToCode(workspace)
  codeSignal.value = code
})

effect(() => {
  console.log(codeSignal.value)
  console.log(Blockly.serialization.workspaces.save(workspace))
  loader.saveWorkspace()
})
