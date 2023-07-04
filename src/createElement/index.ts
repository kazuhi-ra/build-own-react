type TagName = 'TEXT_ELEMENT' | keyof HTMLElementTagNameMap
type Children = (string | number | Element)[]
type Element = {
  type: TagName
  props: {
    [key: string]: any
    nodeValue?: string
    children: Children
  }
}

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

const createTextElement = (text: string | number): Element => ({
  type: 'TEXT_ELEMENT',
  props: {
    children: [],
    nodeValue: `${text}`,
  },
})
