/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Header } from 'components/Header'
import { ThemeSwitcher } from 'components/ThemeSwitcher'
import { Footer } from 'components/Footer'

interface LayoutType {
  isDarkTheme: boolean
  setDarkTheme: (value: boolean) => void
  children: React.ReactNode
}

export function Layout({ isDarkTheme, setDarkTheme, children }: LayoutType): JSX.Element {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'start',
      }}
    >
      <Header search={<ThemeSwitcher isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme} />} />
      <main css={{ flexGrow: '1', width: '90%', margin: '3em auto' }}>{children}</main>
      <Footer />
    </div>
  )
}
