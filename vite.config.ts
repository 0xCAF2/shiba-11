import { defineConfig } from "vite-plus"

export default defineConfig({
  root: "page",
  cleanDir: true,
  input: [
    "index.html",
    "ja/infinite-loop.html",
    "en/infinite-loop.html",
    "ja/loop.html",
    "en/loop.html",
    "ja/conditional.html",
    "en/conditional.html",
    "ja/memory.html",
    "ja/memorize.html",
    "en/memorize.html",
    "ja/four-elements.html",
    "en/four-elements.html",
    "ja/editor/index.html",
    "en/editor/index.html",
  ],
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  fmt: {
    semi: false,
    printWidth: 80,
  },
})
