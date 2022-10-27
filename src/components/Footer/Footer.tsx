/** @jsx jsx */
import { jsx } from '@emotion/react'

export function Footer(): JSX.Element {
  return (
    <footer
      css={{
        height: '10vh',
        display: 'flex',
        background: '#002884',
        textAlign: 'center',
        color: '#FFF',
        alignItems: 'center',
      }}
    >
      <p css={{ flexBasis: '100%' }}>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
      </p>
    </footer>
  )
}
