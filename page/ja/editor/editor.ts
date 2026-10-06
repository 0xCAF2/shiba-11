import * as Blockly from "blockly"
import "blockly/blocks"
import DarkTheme from "@blockly/theme-dark"
import { shiba11Generator } from "../../../src/block-editor"
import { toolbox } from "../../../src/block-editor/toolbox-ja"
import { codeSignal } from "../../../src/code"
import { effect } from "@preact/signals"
import { Loader } from "../../loader"
import * as Ja from "blockly/msg/ja"
// @ts-ignore
Blockly.setLocale(Ja)

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

const loader = new Loader(workspace, "ja")
const code = new Map<string, any>()
code.set("ja", {
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
                                      name: "カウント",
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
                                    name: "カウント",
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
                                      TEXT: " 回クリックされました。",
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
                                                TEXT: "最後にクリックされたのは：",
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
                                                      name: "数字",
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
                            name: "eValue",
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
                                                                    name: "カウント",
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
      name: "カウント",
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
      name: "数字",
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
                NUM: 50,
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
              next: {
                block: {
                  type: "static_text",
                  id: "VCNkH)5a(1[q0^/*_Hc}",
                  inputs: {
                    CONTENT: {
                      shadow: {
                        type: "text_content",
                        id: "36J|,eHQg#c1}#,doSL[",
                        fields: {
                          TEXT: " 円です。",
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
        id: "xD?;t1}D-$?UksH|;:TL",
        x: 61,
        y: 14,
        fields: {
          VAR: {
            id: "nS,XKH-mD,63lz^Qd*[A",
          },
        },
        inputs: {
          VALUE: {
            shadow: {
              type: "math_number",
              id: "}=N(Wy$!hYy=+dqLR-~u",
              fields: {
                NUM: 0,
              },
            },
            block: {
              type: "string",
              id: "Y0S{Z2{q0i/yE^BYK]$|",
              fields: {
                VALUE: "晴れ",
              },
            },
          },
        },
      },
      {
        type: "p",
        id: "K@oV3./;8%IcI:nB]2bI",
        x: 12,
        y: 107,
        inputs: {
          CHILDREN: {
            block: {
              type: "controls_if",
              id: "7Z_|_i{3al[{Vl+-$|Ef",
              extraState: {
                elseIfCount: 2,
                hasElse: true,
              },
              inputs: {
                IF0: {
                  block: {
                    type: "logic_compare",
                    id: "18quUKeswf+0ze)MxG]v",
                    fields: {
                      OP: "EQ",
                    },
                    inputs: {
                      A: {
                        block: {
                          type: "variables_get",
                          id: "Ceuft,jDix($O;vqi`[.",
                          fields: {
                            VAR: {
                              id: "nS,XKH-mD,63lz^Qd*[A",
                            },
                          },
                        },
                      },
                      B: {
                        block: {
                          type: "string",
                          id: "C3O*{dy82;+`Bu^F:ar#",
                          fields: {
                            VALUE: "晴れ",
                          },
                        },
                      },
                    },
                  },
                },
                DO0: {
                  block: {
                    type: "static_text",
                    id: "wSdI$#BE/?D=BtB`U4q?",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "+{2V2HjDC`Bb^:zyo]$!",
                          fields: {
                            TEXT: "☀️ です。",
                          },
                        },
                      },
                    },
                  },
                },
                IF1: {
                  block: {
                    type: "logic_compare",
                    id: "Ns=h?j(B8Pc]i@V({U`9",
                    fields: {
                      OP: "EQ",
                    },
                    inputs: {
                      A: {
                        block: {
                          type: "variables_get",
                          id: "c(r4.{(b3dcMn!,{Tz^O",
                          fields: {
                            VAR: {
                              id: "nS,XKH-mD,63lz^Qd*[A",
                            },
                          },
                        },
                      },
                      B: {
                        block: {
                          type: "string",
                          id: "CEL?p^?l=Oua{JH`JEeT",
                          fields: {
                            VALUE: "くもり",
                          },
                        },
                      },
                    },
                  },
                },
                DO1: {
                  block: {
                    type: "static_text",
                    id: "?||p:%hN@oP0SV]B9fdw",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "Xw)+,gTLAI{$53]|6KgT",
                          fields: {
                            TEXT: "☁️ です。",
                          },
                        },
                      },
                    },
                  },
                },
                IF2: {
                  block: {
                    type: "logic_compare",
                    id: "+tM$i9p_VEHFNy-/dR:i",
                    fields: {
                      OP: "EQ",
                    },
                    inputs: {
                      A: {
                        block: {
                          type: "variables_get",
                          id: ":QNdML~oL;1nW9PgLpS~",
                          fields: {
                            VAR: {
                              id: "nS,XKH-mD,63lz^Qd*[A",
                            },
                          },
                        },
                      },
                      B: {
                        block: {
                          type: "string",
                          id: "Av1V|Y+fmVB,^2vUFSTV",
                          fields: {
                            VALUE: "雨",
                          },
                        },
                      },
                    },
                  },
                },
                DO2: {
                  block: {
                    type: "static_text",
                    id: "Qb!F@L5W0[eS7Xz+TLF=",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "{JpBDTtKmL/omBNV1Y7P",
                          fields: {
                            TEXT: "☔️ です。",
                          },
                        },
                      },
                    },
                  },
                },
                ELSE: {
                  block: {
                    type: "static_text",
                    id: ";x+T}`hNuKDJ^ZO0v_HF",
                    inputs: {
                      CONTENT: {
                        shadow: {
                          type: "text_content",
                          id: "doevah.mjRoEg4Us@?r;",
                          fields: {
                            TEXT: "未知です。",
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
      name: "今日の天気",
      id: "nS,XKH-mD,63lz^Qd*[A",
    },
    {
      name: "項目",
      id: "lf}Cm3w-qDHBF(*^7N@]",
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
