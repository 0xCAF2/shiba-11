import type { Interpreter } from "../../interpreter"

export function defineFunctionsForLists(ip: Interpreter) {
  ip.defineExternalFunction("listsRepeat", (...args) => {
    const [value, times] = args
    if (typeof times !== "number" || times < 0) {
      throw new Error("times must be a non-negative number")
    }
    return Array(times).fill(value)
  })

  ip.defineExternalFunction("listsSplit", (...args) => {
    const [text, delimiter] = args
    if (typeof text !== "string" || typeof delimiter !== "string") {
      throw new Error("Arguments must be strings")
    }
    return text.split(delimiter)
  })

  ip.defineExternalFunction("listsLength", (...args) => {
    const [list] = args
    if (!Array.isArray(list)) {
      throw new Error("Argument must be an array")
    }
    return list.length
  })

  ip.defineExternalFunction("listsIsEmpty", (...args) => {
    const [list] = args
    if (!Array.isArray(list)) {
      throw new Error("Argument must be an array")
    }
    return list.length === 0
  })

  ip.defineExternalFunction("listsIndexOf", (...args) => {
    const [list, item] = args
    if (!Array.isArray(list)) {
      throw new Error("First argument must be an array")
    }
    return list.indexOf(item ?? null)
  })

  ip.defineExternalFunction("listsLastIndexOf", (...args) => {
    const [list, item] = args
    if (!Array.isArray(list)) {
      throw new Error("First argument must be an array")
    }
    return list.lastIndexOf(item ?? null)
  })
}
