import React from 'react'
import { Card } from './Card'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utilsTest'

const props = {
  imgURL: 'http://sample.com',
  imgAlt: 'sample alt',
  productName: 'Sample Name',
  price: '200$',
}

describe('Card component', () => {
  it('renders the Card', () => {
    const { getByTestId } = renderWithTheme(
      <Card
        imgURL={props.imgURL}
        imgAlt={props.imgAlt}
        productName={props.productName}
        price={props.price}
      />,
    )
    const card = getByTestId('card')
    expect(card).toBeDefined()
  })
  it('Image should get right src and alt', () => {
    const { getByRole } = renderWithTheme(
      <Card
        imgURL={props.imgURL}
        imgAlt={props.imgAlt}
        productName={props.productName}
        price={props.price}
      />,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'http://sample.com')
    expect(img).toHaveAttribute('alt', 'sample alt')
  })
})
