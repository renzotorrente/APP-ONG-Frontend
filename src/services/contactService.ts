import axios, { AxiosResponse } from 'axios';
import clientAxios from '../configs/clientAxios';
import { PATH_CONTACTLIST } from '../constants/constants';
import { getToken } from './getToken';

export const createContact = (data: {
  name: string,
  email: string,
  message: string
}): Promise<AxiosResponse> => {
  return clientAxios.get(PATH_CONTACTLIST, data);
}

export const getDetailContactService = async (id:number) => {
  const respuesta = await clientAxios.get(`/api/contacts/${id}`);

  return respuesta.data;
}