import { h, type ComponentChildren } from "preact"
import { Address, BlockType } from "../runtime"
import { Block, BlockExitReason } from "../runtime"
import { Styles } from "./styles"
import { Attributes } from "./attributes"
import { EventHandlers } from "./event-handlers"

export class TagBlock extends Block {
  public readonly attributes = new Attributes()
  public readonly children: ComponentChildren[] = []
  public readonly styles = new Styles()
  public readonly eventHandlers = new EventHandlers()

  constructor(
    public readonly tag: string,
    address: Address,
    willEnter: () => boolean,
    didExit: () => BlockExitReason,
  ) {
    super(BlockType.Tag, address, willEnter, didExit)
  }

  createVNode(): ComponentChildren {
    return h(
      this.tag,
      {
        ...this.attributes.all,
        style: this.styles.all,
        ...this.eventHandlers.all,
      },
      ...this.children,
    )
  }
}
