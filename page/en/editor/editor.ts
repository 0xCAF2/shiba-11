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
const codeKeys = new Set<string>(["en", "memorize", "conditional"])

if (codeKeys.has(loader.key)) {
  const response = await fetch(`./${loader.key}.json`)
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
