import { Register } from '@/features/Auth/components/Register'
import userApi from '@/api/userApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import StorageKeys from '@/constants/storage-keys'
// mỗi features là một countslice.js
// sau đó tuwf folder scr tạo folder app. setup store dưới foder app
// sau đó gắn store vào app nhờ react redux

// First, create the thunk
export const register = createAsyncThunk('user/register', async (payload: any) => {
  const data: any = await userApi.register(payload)

  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})
export const login = createAsyncThunk('user/login', async (payload: any) => {
  const data: any = await userApi.login(payload)

  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})
const item = window.localStorage.getItem(StorageKeys.USER)
const userSlice = createSlice({
  name: 'user',
  initialState: {
    // khi load trang ..thif set redux lấy từ local
    current: item ? JSON.parse(item) : {},
    settings: {},
  },
  reducers: {},
  extraReducers: () => {
    register.fulfilled,
      (state: any, action: any) => {
        state.current = action.payload
      }
    login.fulfilled,
      (state: any, action: any) => {
        state.current = action.payload
      }
  },
})

const { reducer } = userSlice

export default reducer // export default
