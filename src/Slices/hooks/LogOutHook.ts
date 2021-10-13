import { LOCAL_STORAGE_KEY } from '../../constants/constants'
import { useAppDispatch } from '../../store'
import { logOUT } from '../AuthSlice/AuthSlice'

const LogOutHook = () => {
  const dispatch = useAppDispatch()
  const logOut = () => {
    dispatch(logOUT())
    window.localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  return {
    logOut,
  }
}

export default LogOutHook
