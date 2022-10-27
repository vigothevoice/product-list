import React from 'react'
import { Global, css, ThemeProvider } from '@emotion/react'
import ReactDOM from 'react-dom'
import { Layout } from 'components/Layout'
import { ProductsList } from 'features/catalogue/ProductsList'
import { themes } from './themes'

function App() {
  const [isDarkTheme, setDarkTheme] = React.useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
      <Global
        styles={css({
          '*': {
            fontFamily: 'Poppins',
            fontSize: '1rem',
            margin: 0,
            padding: 0,
          },
          body: {
            backgroundColor: isDarkTheme
              ? themes.dark.background.bottom
              : themes.light.background.bottom,
            color: isDarkTheme ? themes.dark.text : themes.light.text,
          },
          h1: {
            fontSize: '1.9rem',
          },
          h2: {
            fontSize: '1.5rem',
            wordWrap: 'break-word',
          },
        })}
      />
      <Layout isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme}>
        <ProductsList />
      </Layout>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
