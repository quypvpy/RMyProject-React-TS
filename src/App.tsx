import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ProductFeature } from './features/Products'
import { ListPage } from './features/Products/pages'
import { PageSearch } from './features/Products/pages/Search'

import { publicRoutes } from './routes'

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          // để biến thường nó bị lỗi.. nên viết hoa.
          return <Route key={index} path={route.path} element={<Page />}></Route>
        })}
      </Routes>
      {/* <ProductFeature></ProductFeature> */}
      {/* <PageSearch></PageSearch> */}
    </div>
  )
}

export default App
