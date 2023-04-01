import { createSlice } from '@reduxjs/toolkit'
// mooix feature có một slice
const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    valueSearch(state, action) {
      const value = action.payload

      return value
    },
    removeSearch(state) {
      return (state = '')
    },
  },
})

const { actions, reducer } = searchSlice
export const { valueSearch, removeSearch } = actions //name export
export default reducer
