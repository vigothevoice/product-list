
export interface ArticleTypes {
  name: string
  variantName: string
  prices: PricesTypes
  images: ImageTypes[]
}

export interface ImageTypes {
  path: string
}

export interface PricesTypes {
  currency: string
  regular: {
    value: number
  }
}

export interface ArticleTypes {
  name: string
  variantName: string
  prices: PricesTypes
  images: ImageTypes[]
}

export interface CategoryArticle {
  articles: ArticleTypes[]
}

export interface CategoryArticleTypes {
  articles: ArticleTypes[]
}

export interface ChildCategoryTypes {
  name: string
  urlPath: string
}

export interface CategoryTypes {
  name: string
  categoryArticles: CategoryArticle
  articleCount: number
  childrenCategories: ChildCategoryTypes[]
}