import { LOCAL_STORAGE_KEY } from '../constants/constants'
import { auth } from './AuthSlice/Types'
export function VerifyAuth(): auth {
  const auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!)
  if (auth) {
    return auth
  } else {
    const userstate = {
      logged: false,
      token: null,
      role: null,
      id: null,
    }
    return userstate
  }
}
