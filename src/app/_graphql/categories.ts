export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `query categories {
  categories(limit: 300) {
    docs {
      id
      title
      media {
        alt
        width
        height
        url
      }
    }
  }  
}`