import { configureStore, Store, combineReducers } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import AuthSlice from '../Slices/AuthSlice/AuthSlice'

const RootState = combineReducers({
  Auth: AuthSlice,
})
const store: Store = configureStore({ reducer: RootState })
export type RootState = ReturnType<typeof RootState>
export type AppDispatch = typeof store.dispatch
export default store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
