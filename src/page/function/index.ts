import type { Interpreter } from "../../interpreter"
import { defineFunctionsForLists } from "./lists"

/**
 * Defines all external functions for the given interpreter.
 * @param ip an interpreter
 */
export function defineFunctions(ip: Interpreter) {
  defineFunctionsForLists(ip)
}
