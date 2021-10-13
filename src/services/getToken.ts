import { LOCAL_STORAGE_KEY } from '../constants/constants'
import { IcredencialConfig, IUser } from './Interface'

const addToken = (
  credencialConfig: IcredencialConfig,
  User: IUser
): IcredencialConfig => {
  const { token } = User
  credencialConfig.headers = {
    ...credencialConfig.headers,
    Authorization: `Bearer ${token}`,
  }
  return credencialConfig
}

export const getToken = (): IcredencialConfig => {
  const User = localStorage.getItem(LOCAL_STORAGE_KEY)
  const credencialConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (User) {
    return addToken(credencialConfig, JSON.parse(User))
  }
  return credencialConfig
}
