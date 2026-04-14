import type { Address } from "./address"
import type { Runtime } from "./runtime"

export class Block {
  constructor(
    public readonly type: BlockType,
    public readonly address: Address,
    public readonly willEnter: (r: Runtime) => boolean,
    public readonly didExit: (r: Runtime) => BlockExitReason,
  ) {}
}

export enum BlockType {
  Loop,
  Conditional,
  Tag,
}

export enum BlockExitReason {
  Shifted,
  Jumped,
  Returned,
}
