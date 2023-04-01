import { createSelector } from '@reduxjs/toolkit'
// từ store.cart xong xuống trong cart có cartItem
const cartItemSelector = (state: any) => state.cart.cartItem

// count number of product incart
export const cartItemCountSelector = createSelector(
  cartItemSelector,
  (cartItem) => cartItem.reduce((count: any, item: any) => count + item.quantity, 0)
  //
)
// caculate total of cart
export const cartTotalSelector = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((total: any, item: any) => total + item.product.salePrice * item.quantity, 0)
)

//
export const ProductListSelector = createSelector(cartItemSelector, (cartItem) => cartItem)
