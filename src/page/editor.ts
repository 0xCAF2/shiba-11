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

workspace.addChangeListener(() => {
  const code = shiba11Generator.workspaceToCode(workspace)
  codeSignal.value = code
})

effect(() => {
  console.log(codeSignal.value)
})
