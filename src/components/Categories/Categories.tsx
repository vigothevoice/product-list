/** @jsx jsx */
import { jsx, css, useTheme } from '@emotion/react'
import React from 'react'
import placeholder from 'assets/furniture.png'
import { CategoryTypes, ChildCategoryTypes } from 'types'

export function Categories({ categories }: { categories: CategoryTypes[] }): JSX.Element {
  const theme: any = useTheme()
  const [scrolled, setSCrolled] = React.useState(false)

  const listenScrollEvent = () => {
    window.scrollY > 195 ? setSCrolled(true) : setSCrolled(false)
  }

  React.useEffect(() => {
    document.addEventListener('scroll', listenScrollEvent)
    // cleanup
    return () => document.removeEventListener('scroll', listenScrollEvent)
  }, [])

  return (
    <React.Fragment>
      <h2
        css={{
          marginBottom: '1rem',
          textAlign: 'center',
          ' @media (max-width: 1024px)': {
            display: 'none',
          },
        }}
      >
        Categories
      </h2>
      <div
        css={{
          width: '100%',
          height: '200px',
          position: 'sticky',
          display: 'block',
          marginBottom: '3rem',
          top: 0,
          ' @media (max-width: 1024px)': {
            display: 'none',
          },
        }}
      >
        <div
          css={{
            transformOrigin: 'top',
            padding: '2rem',
            backgroundColor: theme.background.bottom,
          }}
        >
          <nav
            css={[
              css({
                display: 'flex',
                gap: '1em',
                justifyContent: 'space-between',
                transition: '200ms',
              }),
              scrolled ? css({ transform: `scale(0.95)` }) : null,
            ]}
          >
            {categories[0]?.childrenCategories.map(
              (category: ChildCategoryTypes, index: number) => {
                return (
                  <div
                    key={index}
                    css={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      width: 'max(100px, 3rem)',
                    }}
                  >
                    <img
                      src={placeholder}
                      alt={category.name}
                      css={{
                        height: '100px',
                        opacity: 0.7,
                        transition: '300ms',
                        ':hover': {
                          opacity: 1,
                        },
                      }}
                    />
                    {!scrolled && (
                      <p css={{ marginTop: '2rem', textAlign: 'center' }}>{category.name}</p>
                    )}
                  </div>
                )
              },
            )}
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}
