/** @jsx jsx */
import { jsx } from '@emotion/react'
import LogoSVG from 'assets/logo.svg'

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
        <img src={LogoSVG} alt="logo" css={{ width: '5rem' }} />
      </a>
      {search}
    </header>
  )
}
