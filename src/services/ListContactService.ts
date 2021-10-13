import clientAxios from '../configs/clientAxios';
import { PATH_CONTACTLIST } from '../constants/constants';
export async function ListContactService(): Promise<any> {
    let response = await clientAxios.get(PATH_CONTACTLIST);
    return response.data;
}