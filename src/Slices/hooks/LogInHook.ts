import { LOCAL_STORAGE_KEY } from '../../constants/constants'
import { logIN } from '../AuthSlice/AuthSlice'

const LogInHook = (user) => {
  const LogIn = () => {
    logIN(user)
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
  }
  return {
    LogIn,
  }
}

export default LogInHook
