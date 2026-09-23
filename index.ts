import { serve } from "bun"
import index from "./page/index.html"

const server = serve({
  routes: {
    "/": index,
  },
  development: {
    hmr: true,
    console: true,
  },
})

console.log(server.url.href)
