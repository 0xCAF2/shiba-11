import { h, type ComponentChildren } from "preact"
import { Address, BlockExitReason, BlockType } from "../runtime"
import { Styles } from "./styles"
import { Attributes } from "./attributes"
import { EventHandlers } from "./event-handlers"

export class TagBlock {
  public readonly attributes = new Attributes()
  public readonly children: (TagBlock | string | (() => string))[] = []
  public readonly styles = new Styles()
  public readonly eventHandlers = new EventHandlers()

  public readonly type = BlockType.Tag

  constructor(
    public readonly tag: string,
    public readonly address: Address,
    public readonly willEnter: () => boolean,
    public readonly didExit: () => BlockExitReason,
  ) {}
}
