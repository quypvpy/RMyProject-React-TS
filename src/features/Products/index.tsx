// import * as React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increase, decrease } from './productsSlice'

// export interface ProductFeatureProps {}

// export function ProductFeature(props: ProductFeatureProps) {
//   const dispath = useDispatch()
//   const count = useSelector((state: any) => state.count)

//   const handleIncreaseClick = () => {
//     const action = increase()
//     dispath(action)
//   }
//   const handleDecreaseClick = () => {
//     const action = decrease()
//     dispath(action)
//   }
//   return (
//     <div>
//       <h1>Product Features {count}</h1>
//       <button onClick={handleIncreaseClick}>Increase</button>
//       <button onClick={handleDecreaseClick}>Decrease</button>
//     </div>
//   )
// }

import * as React from 'react'
import {
  Link,
  matchRoutes,
  Route,
  Routes,
  useLocation,
  useMatch,
  useMatches,
  useRoutes,
} from 'react-router-dom'
import { CartFeature } from '../Cart/CartFeature'
import { DetailPage, ListPage, Main } from './pages'

export interface ProductFeatureProps {}

export function ProductFeature(props: ProductFeatureProps) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Main />}></Route>
        <Route path="/:id/*" element={<DetailPage />}></Route> */}

        {/* <Route path="/*" element={<Main />}></Route> */}
        {/* <Route path="/cart" element={<CartFeature />}></Route> */}
        {/* <Route path="/" element={<Main />}></Route> */}
      </Routes>
    </div>
  )
}
