type TagName = keyof HTMLElementTagNameMap
export type Element =
  | {
      type: TagName
      props: {
        [key: string]: any
        children: Children
      }
    }
  | {
      type: 'TEXT_ELEMENT'
      props: {
        nodeValue: string
        children: never[]
      }
    }
type Text = string | number
type Child = Text | Element
type Children = Child[]

export const createElement = (
  type: TagName,
  props?: Record<string, any> | null,
  ...children: Children
): Element => ({
  type,
  props: {
    ...props,
    children: children.map((child) =>
      typeof child === 'string' || typeof child === 'number'
        ? createTextElement(child)
        : child
    ),
  },
})

const createTextElement = (text: Text): Element => ({
  type: 'TEXT_ELEMENT',
  props: {
    children: [],
    nodeValue: `${text}`,
  },
})
