import axios, {AxiosResponse} from 'axios'
import { PATH_URL_CATEGORY } from '../constants/constants' 
import { getToken } from './getToken';

export const getCategories = ():Promise<AxiosResponse> => {
  return axios.get(PATH_URL_CATEGORY, getToken())
}

export const getCategoryById = (id:string):Promise<AxiosResponse> => {
  return axios.get(PATH_URL_CATEGORY + `/${id}`, getToken())
}

export const deleteCategory = (id:number):Promise<AxiosResponse> => {
  return axios.delete(PATH_URL_CATEGORY + "/" + id, getToken())
}

