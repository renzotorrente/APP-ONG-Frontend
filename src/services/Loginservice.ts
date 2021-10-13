import { LoginType } from '../components/Login/LoginType'
import clientAxios from '../configs/clientAxios'
export async function LoginService(values: LoginType): Promise<any> {
  const response = await clientAxios.post('/api/auth/login', values)
  return response
}
