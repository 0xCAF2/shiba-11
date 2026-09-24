import { serve } from "bun"
import enEditor from "./page/en/editor/index.html"
import jaEditor from "./page/ja/editor/index.html"
import memorize from "./page/ja/memorize.html"
import fourElements from "./page/ja/four-elements.html"
import index from "./page/index.html"

const server = serve({
  routes: {
    "/en/editor/": enEditor,
    "/ja/editor/": jaEditor,
    "/ja/memorize.html": memorize,
    "/ja/four-elements.html": fourElements,
    "/": index,
  },
  development: {
    hmr: true,
    console: true,
  },
})

console.log(server.url.href)
