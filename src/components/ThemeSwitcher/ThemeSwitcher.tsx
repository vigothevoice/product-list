/** @jsx jsx */
import { jsx } from '@emotion/react'
import lighIcon from 'assets/lightTheme.png'
import darkIcon from 'assets/darkTheme.png'

interface ThemeType {
  isDarkTheme: boolean
  setDarkTheme: (value: boolean) => void
}

export function ThemeSwitcher({ isDarkTheme, setDarkTheme }: ThemeType): JSX.Element {
  return (
    <button
      type="button"
      aria-label="Switch theme"
      onClick={() => {
        setDarkTheme(!isDarkTheme)
      }}
      css={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', color: 'white' }}
    >
      <p>Mode:</p>
      <img src={isDarkTheme ? darkIcon : lighIcon} alt={isDarkTheme ? 'dark icon' : 'light icon'} />
    </button>
  )
}
