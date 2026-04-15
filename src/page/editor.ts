import * as Blockly from "blockly"
import DarkTheme from "@blockly/theme-dark"
import { toolbox } from "../block-editor"
import "../block-editor/block"
import { shiba11Generator } from "../block-editor/generator"

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
  console.log(code)
})
