import React from 'react'
import { Categories } from './Categories'
import { renderWithTheme } from '../../utilsTest'

const mockCategories = [
  {
    name: 'Möbel',
    articleCount: 78000,
    childrenCategories: [
      {
        name: 'Wohnzimmer',
        urlPath: 'kategorie/wohnzimmermoebel/',
      },
      {
        name: 'Schlafzimmer',
        urlPath: 'kategorie/schlafzimmermoebel/',
      },
    ],
    categoryArticles: {
      articles: [
        {
          name: 'Premium Komfortmatratze Smood',
          variantName: '180 x 200cm',
          prices: {
            currency: 'EUR',
            regular: {
              value: 54999,
            },
          },
          images: [
            {
              path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp',
            },
          ],
        },
        {
          name: 'Schuhkommode Lindholm II',
          variantName: 'Weiß',
          prices: {
            currency: 'EUR',
            regular: {
              value: 44999,
            },
          },
          images: [
            {
              path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000008078-190401-10061600008-IMAGE-P000000001000008078.webp',
            },
          ],
        },
      ],
    },
  },
]

describe('Categories component', () => {
  it('Should display list of categories with img', () => {
    const { getByAltText } = renderWithTheme(<Categories categories={mockCategories} />)
    const img = getByAltText('Wohnzimmer')
    expect(img).toHaveAttribute('alt', 'Wohnzimmer')
  })
})
