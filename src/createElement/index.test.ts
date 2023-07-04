import { createElement } from '.'

describe('createElement', () => {
  it('propsなし childrenなし', () => {
    const result = createElement('div')
    expect(result).toEqual({
      type: 'div',
      props: { children: [] },
    })
  })

  it('propsあり childrenなし', () => {
    const result = createElement('div', { id: 'foo' })
    expect(result).toEqual({
      type: 'div',
      props: {
        id: 'foo',
        children: [],
      },
    })
  })

  describe('propsなし childrenあり', () => {
    it('childrenがstring', () => {
      const result = createElement('div', null, 'text')
      expect(result).toEqual({
        type: 'div',
        props: {
          children: [
            {
              type: 'TEXT_ELEMENT',
              props: {
                children: [],
                nodeValue: 'text',
              },
            },
          ],
        },
      })
    })

    it('childrenがnumber', () => {
      const result = createElement('div', null, 4649)
      expect(result).toEqual({
        type: 'div',
        props: {
          children: [
            {
              type: 'TEXT_ELEMENT',
              props: {
                children: [],
                nodeValue: '4649',
              },
            },
          ],
        },
      })
    })

    it('childrenがElement', () => {
      const result = createElement('div', null, createElement('a'))
      expect(result).toEqual({
        type: 'div',
        props: {
          children: [createElement('a')],
        },
      })
    })
  })

  it('propsあり childrenあり', () => {
    const result = createElement(
      'div',
      { id: 'foo' },
      createElement('div'),
      createElement('a', null, 'bar')
    )

    expect(result).toEqual({
      type: 'div',
      props: {
        id: 'foo',
        children: [createElement('div'), createElement('a', null, 'bar')],
      },
    })
  })
})
