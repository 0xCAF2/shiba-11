import { serve } from "bun"
import editor from "./page/en/editor/index.html"

const server = serve({
  routes: {
    "/en/editor/": editor,
    "/*": { dir: "./page" },
  },
  development: {
    hmr: true,
    console: true,
  },
})

console.log(server.url.href)
