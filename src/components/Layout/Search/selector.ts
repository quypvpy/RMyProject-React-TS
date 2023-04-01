import { createSelector } from '@reduxjs/toolkit'
// từ store.cart xong xuống trong cart có cartItem
const valueSearch = (state: any) => state.search

// count number of product incart
export const valueSearchSelector = createSelector(valueSearch, (valueSearch) => valueSearch)
