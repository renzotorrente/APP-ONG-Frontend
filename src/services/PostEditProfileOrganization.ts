import { AxiosResponse } from 'axios';
import { data } from '../components/EditOrganization/types';
import clientAxios from '../configs/clientAxios';
import { EditOrganization } from '../constants/constants';
export async function ServiceEditOrganization(values:data):Promise<AxiosResponse>{

  const formData = new FormData();

  formData.append('name', values.name)
  formData.append('welcomeText', values.welcomeText);
  formData.append('imageFile', values.image[0])

 const response = await clientAxios.put(EditOrganization, formData, {headers:{ "Content-Type": "multipart/form-data" }});

 return response.data;
}

export async function createOrganizationService(values:data) {
  const formData = new FormData();

  formData.append('name', values.name)
  formData.append('welcomeText', values.welcomeText);
  formData.append('imageFile', values.image[0])

 const response = await clientAxios.post(EditOrganization, formData, {headers:{ "Content-Type": "multipart/form-data" }});

 return response.data;
}