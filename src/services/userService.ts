import { AxiosResponse } from "axios";
import { userType } from "../components/FormComponents/formEditUser/types";
import clientAxios from "../configs/clientAxios"


export const getUsersService = async () => {
    const response = await clientAxios.get('/api/users/');

    return response.data;
}

export const getUserByIdService = async (id:string) => {
  const response = await clientAxios.get(`/api/users/${id}`);

  return response.data;
}

export const updateUserService = async (id:string, user:userType): Promise<AxiosResponse> => {
   const response = await clientAxios.put(`/api/users/${id}`, user);
   return response.data;
}

export const deleteUserService = async (id:string) => {
  const response = await clientAxios.delete(`/api/users/${id}`);
  return response.data;
}