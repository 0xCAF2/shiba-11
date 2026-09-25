import { build } from "bun"

await build({
  entrypoints: [
    "page/index.html",
    "page/en/memory.html",
    "page/ja/memory.html",
    "page/en/memorize.html",
    "page/ja/memorize.html",
    "page/en/four-elements.html",
    "page/ja/four-elements.html",
    "page/en/editor/index.html",
    "page/ja/editor/index.html",
  ],
  outdir: "docs",
  root: "page",
})
