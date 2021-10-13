import axios, { AxiosResponse } from 'axios'
import clientAxios from '../configs/clientAxios'
import { PATH_URL_ACTIVITY } from '../constants/constants'
import { createFormData } from '../utilities/formDataUtils'
import { getToken } from './getToken'

export const creatNewActivity = (activity: {
  name: string
  content: string,
  imageFile: File
}): Promise<AxiosResponse> => {
  const formData = createFormData<typeof activity>(activity);
  return axios.post(PATH_URL_ACTIVITY, formData, {
    headers: {
      authorization: getToken().headers.authorization,
      "Content-Type": "multipart/form-data"
    }
  })
}

export const updateActivity = (activity: {
  id: number
  name: string
  content: string,
  imageFile?: File
}): Promise<AxiosResponse> => {
  const formData = createFormData<typeof activity>(activity);
  return clientAxios.put(PATH_URL_ACTIVITY + activity.id, formData, {
    headers: {
      authorization: getToken().headers.authorization,
      "Content-Type": "multipart/form-data"
    }
  })
}

export const deleteActivity = async (id:number): Promise<AxiosResponse> => {
  return await clientAxios.delete(PATH_URL_ACTIVITY + id)

}

export const getActivities = async (): Promise<AxiosResponse> => {
  return await clientAxios.get(PATH_URL_ACTIVITY)
}

export const getActivityById = async (id:string) => {
  const response = await clientAxios.get(`/api/activities/${id}`);
  return response.data;
}