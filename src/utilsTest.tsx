import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { render } from '@testing-library/react'
import { themes } from './themes'

export function renderWithTheme(ui: any) {
  const utils = render(<ThemeProvider theme={themes.light}>{ui}</ThemeProvider>)
  return utils
}
