/** @jsx jsx */
import { jsx, css, useTheme } from '@emotion/react'

interface CardTypes {
  imgURL: string
  imgAlt: string
  productName: string
  price: string
}

const customButton = (theme: any) =>
  css({
    fontSize: 'inherit',
    padding: '.8em 2em',
    marginTop: '2em',
    borderRadius: '24px',
    border: 0,
    backgroundColor: '#f44336',
    boxShadow: theme.button.shadow,
    color: '#FFF',
    cursor: 'pointer',
    transition: '50ms',
    ':hover, :focus': {
      backgroundColor: '#ad3229',
      boxShadow: theme.button.hoverShadow,
      transform: 'scale(0.95)',
    },
    ':active': {
      backgroundColor: '#f44336',
      boxShadow: theme.button.hoverShadow,
      transform: 'scale(0.95)',
    },
  })

export function Card({ imgURL, imgAlt, productName, price }: CardTypes): JSX.Element {
  const theme: any = useTheme()

  return (
    <article
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.background.top,
        padding: '3rem',
        borderRadius: '24px',
        boxShadow: theme.shadow,
      }}
      data-testid="card"
    >
      <figure>
        <img
          src={imgURL}
          alt={imgAlt}
          css={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }}
        />
      </figure>

      <h2>{productName}</h2>
      <p css={{ margin: '1em 0' }}>{price}</p>
      <button
        type="button"
        aria-label="Add to cart"
        css={customButton(theme)}
        onClick={() => alert('add to the cart!')}
      >
        Add to cart
      </button>
    </article>
  )
}
