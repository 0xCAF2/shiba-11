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
const codeKeys = new Set<string>(["ja", "memorize", "conditional"])

if (codeKeys.has(loader.key)) {
  const response = await fetch(`./blocks/${loader.key}.json`)
  const code = await response.json()
  loader.loadWorkspace(code)
}

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
