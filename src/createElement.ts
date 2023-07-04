type TagName = keyof HTMLElementTagNameMap

type Element = {
  type: TagName
  props: {
    [key: string]: any
    children: Element[]
  }
}

export const createElement = (
  type: TagName,
  props: Record<string, any>,
  ...children: Element[]
): Element => ({
  type,
  props: {
    ...props,
    children,
  },
})
