/** @jsx jsx */
import { jsx } from '@emotion/react'

export function Header({ search }: any): JSX.Element {
  return (
    <header
      css={{
        height: '10vh',
        display: 'flex',
        background: '#3f50b5',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        '> *': {
          margin: '1rem',
        },
      }}
    >
      <a href="/">
        Logo
      </a>
      {search}
    </header>
  )
}
