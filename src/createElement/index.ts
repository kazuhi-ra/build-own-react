type TagName = keyof HTMLElementTagNameMap
type ElementType = TagName | 'TEXT_ELEMENT'
type Children = (string | number | Element)[]
type Element = {
  type: ElementType
  props: {
    [key: string]: any
    nodeValue?: string
    children: Children
  }
}

export const createElement = (
  type: ElementType,
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

const createTextElement = (text: string | number): Element => ({
  type: 'TEXT_ELEMENT',
  props: {
    children: [],
    nodeValue: `${text}`,
  },
})
