import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utilsTest'

describe('ThemeSwitcher component', () => {
  it('Should display the correct theme icon', () => {
    const { getByRole } = renderWithTheme(
      <ThemeSwitcher isDarkTheme={true} setDarkTheme={() => {}} />,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'dark icon')
  })
})
