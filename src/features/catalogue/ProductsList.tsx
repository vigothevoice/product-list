/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { Card } from 'components/Card'
import { Categories } from 'components/Categories/Categories'
import { CategoryTypes } from 'types'

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR']

const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
})

export function ProductsList() {
  const [categories, setCategories] = React.useState<CategoryTypes[]>()

  React.useEffect(() => {
    const xhr = new XMLHttpRequest()

    xhr.open('POST', '/graphql')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(
      JSON.stringify({
        query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
      }),
    )

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response)
        setCategories(response.data.categories)
      }
    }
  }, [])

  return (
    <React.Fragment>
      {categories?.length ? (
        <React.Fragment>
          <Categories categories={categories} />
          <h1 css={{ marginBottom: '1rem' }}>Products</h1>
          <section
            id="products"
            css={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
            }}
          >
            {categories[0]?.categoryArticles?.articles.map((article) => (
              <Card
                imgURL={article.images[0].path}
                imgAlt={article.name}
                productName={article.name}
                price={formatter.format(article.prices.regular.value / 100)}
              />
            ))}
          </section>
        </React.Fragment>
      ) : (
        <div>Loading</div>
      )}
    </React.Fragment>
  )
}
