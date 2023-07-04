type TagName = keyof HTMLElementTagNameMap
type Children = Element[]

type Element = {
  type: TagName
  props: {
    [key: string]: any
    children: Children
  }
}

export const createElement = (
  type: TagName,
  props: Record<string, any>,
  ...children: Children
): Element => ({
  type,
  props: {
    ...props,
    children,
  },
})
