import { createSlice } from '@reduxjs/toolkit'
import { VerifyAuth } from '../VerifyAuth'
import { auth } from './Types'

const initialState: auth = VerifyAuth()

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    logIN: (state, action) => {
      state.logged = true
      state.token = action.payload.token
      state.role = action.payload.role
      state.id = action.payload.id
    },
    logOUT: (state) => {
      state.logged = false
      state.token = null
      state.role = null
      state.id = null
    },
  },
})
export const { logIN, logOUT } = AuthSlice.actions
export default AuthSlice.reducer
