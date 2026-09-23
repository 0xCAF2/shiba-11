import { build } from "bun"

await build({
  entrypoints: [
    "page/index.html",
    "page/ja/four-elements.html",
    "page/en/editor/index.html",
    "page/en/four-elements.html",
  ],
  outdir: "docs",
})
