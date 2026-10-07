import {
  a as e,
  c as t,
  d as n,
  f as r,
  i,
  l as a,
  m as o,
  n as s,
  o as c,
  p as l,
  r as u,
  s as d,
  t as f,
  u as p,
} from "./preact-RW6-zMjW.js"
var m = l(`blockly-div`, {
    theme: n,
    toolbox: p,
    oneBasedIndex: !1,
    renderer: `zelos`,
    zoom: { startScale: 0.7 },
    sounds: !1,
  }),
  h = new i(m, `en`)
if (new Set([`en`, `memorize`, `conditional`]).has(h.key)) {
  let e = await (await fetch(`./blocks/${h.key}.json`)).json()
  h.loadWorkspace(e)
}
;(m.registerButtonCallback(`createVariableButtonPressed`, () => {
  r.createVariableButtonHandler(m)
}),
  m.addChangeListener(() => {
    let t = d.workspaceToCode(m)
    e.value = t
  }),
  c(() => {
    ;(console.log(e.value),
      console.log(o.workspaces.save(m)),
      h.saveWorkspace())
  }))
var g = new f()
function _() {
  return (
    g.requestRerun(), u(a, { children: u(s, { code: e.value, renderer: g }) })
  )
}
t(u(_, {}), document.getElementById(`root`))
