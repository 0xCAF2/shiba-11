import type { Address } from "./address"

export enum BlockType {
  Call,
  Loop,
  Conditional,
  Tag,
  Handler,
}

export enum BlockExitReason {
  Shift,
  Jump,
  Return,
}

export class Block {
  constructor(
    public readonly type: BlockType,
    public readonly address: Address,
    public readonly willEnter: () => boolean,
    public readonly didExit: () => BlockExitReason,
  ) {}
}
