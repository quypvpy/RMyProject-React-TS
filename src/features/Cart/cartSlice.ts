import { createSlice } from '@reduxjs/toolkit'
// mooix feature có một slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    ShowMiniCart(state) {
      state.showMiniCart = true
    },
    HideMiniCart(state) {
      state.showMiniCart = false
    },
    AddtoCart(state: any, action) {
      // {id,product,quantity,}
      const newItem = action.payload

      const index = state.cartItem.findIndex((x: any) => x.id === newItem.id)
      if (index >= 0) {
        // increase quantity
        state.cartItem[index].quantity += newItem.quantity
      } else {
        // add to cart
        state.cartItem.push(newItem)
      }
    },
    SetQuantity(state: any, action) {
      const { id, quantity } = action.payload
      const index = state.cartItem.findIndex((x: any) => x.id === id)
      if (index >= 0) {
        state.cartItem[index].quantity = quantity
      }
    },
    RemoveFromCart(state, action) {
      const idNeedToRemove = action.payload
      //  coi laij video veef  pbhair clone ra rồi mới cập nhật
      state.cartItem = state.cartItem.filter((x: any) => x.id !== idNeedToRemove)
    },
  },
})

const { actions, reducer } = cartSlice
export const { ShowMiniCart, HideMiniCart, AddtoCart, SetQuantity, RemoveFromCart } = actions //name export
export default reducer
