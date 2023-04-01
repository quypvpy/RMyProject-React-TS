// import counterReducer from '../features/Counter/countSlice'
import counterReducer from '../features/Products/productsSlice'
import userReducer from '../features/Auth/userSlice'
import cartReducer from '../features/Cart/cartSlice'
import searchReducer from '../components/Layout/Search/SearchSlice'
import { configureStore } from '@reduxjs/toolkit'
// import userReducer from "../features/Auth/userSlice";
// import cartReducer from "../features/Cart/cartSlice";
const rootReducer = {
  // rootReducer là bao gồm tất cả reducer mình có
  // counterReducer tên mình đặt nhưng trên mình impport từ hàm couterslice nên nó gắn vào counterReducer
  // và cái reducer này có state là một con số thôi ( 0 )
  // và minh đặt cais tên la count(tương ứng với tên state mà mình truy cập.)
  // và để gắn store vào app của mình thì cần react redux
  // sau khi cài ract redux thì gắn provider vào cái main.tsx
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
  // user: userReducer,
  // cart: cartReducer,
}
const store = configureStore({
  reducer: rootReducer,
})
export default store
