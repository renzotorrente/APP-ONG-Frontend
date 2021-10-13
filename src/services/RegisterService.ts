import { AxiosResponse } from 'axios';
import { FormRegisterTypes } from '../components/FormRegister/FormRegisterTypes';
import clientAxios from '../configs/clientAxios';
export async function RegisterService(values: FormRegisterTypes): Promise<AxiosResponse> {
    let response = await clientAxios.post('/api/auth/register', values);
    return response;
}