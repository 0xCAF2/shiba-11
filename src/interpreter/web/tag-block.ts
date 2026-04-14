import type { ComponentChildren } from "preact"
import type { Address } from "../runtime"
import { Block, BlockExitReason, BlockType } from "../runtime"
import type { Runtime } from "../runtime"
import { Styles } from "./styles"
import { Attributes } from "./attributes"

export class TagBlock extends Block {
  private readonly attributes = new Attributes()
  private readonly children: ComponentChildren[] = []
  private readonly styles = new Styles()

  constructor(
    public readonly tag: string,
    address: Address,
    willEnter: (r: Runtime) => boolean,
    didExit: (r: Runtime) => BlockExitReason,
  ) {
    super(BlockType.Tag, address, willEnter, didExit)
  }
}
