import * as Blockly from "blockly"

export class Loader {
  readonly key: string
  readonly storageKey: string
  readonly workspace: Blockly.Workspace

  readonly defaultKey = "shiba-11-editor-"

  constructor(workspace: Blockly.Workspace, keySuffix = "") {
    this.workspace = workspace

    const urlParams = new URLSearchParams(window.location.search)

    const key = urlParams.get("k")
    if (key) {
      this.key = key
      this.storageKey = this.defaultKey + key + `-${keySuffix}`
    } else {
      this.key = keySuffix
      this.storageKey = this.defaultKey + keySuffix
    }
  }

  loadWorkspace(defaultCode: Map<string, any>) {
    const code = localStorage.getItem(this.storageKey)
    if (code) {
      Blockly.serialization.workspaces.load(JSON.parse(code), this.workspace)
    } else {
      const initialCode = defaultCode.get(this.key)
      Blockly.serialization.workspaces.load(initialCode ?? "", this.workspace)
    }
  }

  saveWorkspace() {
    const code = Blockly.serialization.workspaces.save(this.workspace)
    localStorage.setItem(this.storageKey, JSON.stringify(code))
  }
}
