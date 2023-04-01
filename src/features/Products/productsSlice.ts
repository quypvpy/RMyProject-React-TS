import { createSlice } from '@reduxjs/toolkit'
// mooix feature có một slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1
    },
    decrease(state) {
      return state - 1
    },
  },
})

const { actions, reducer } = counterSlice
export const { increase, decrease } = actions //name export
export default reducer
