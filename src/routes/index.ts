import { CartFeature } from '@/features/Cart/CartFeature'
import { AboutPage, NewsPage, Search } from '@/features/Products/components'
import { DetailPage, Main } from '@/features/Products/pages'

// public routes
const publicRoutes = [
  { path: '/', component: Main },
  { path: '/home', component: Main },
  // { path: '/products/*', component: ProductFeature },
  { path: '/products/*', component: DetailPage },
  { path: '/search/*', component: Search },

  // { path: '/reviews/:id/*', component: ProductReviews },
  { path: '/cart/*', component: CartFeature },
  { path: '/about/*', component: AboutPage },
  { path: '/news/*', component: NewsPage },
]
// const privateRoutes = []
// export { publicRoutes, privateRoutes }

export { publicRoutes }
