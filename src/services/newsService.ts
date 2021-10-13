import axios, { AxiosResponse } from "axios";
import { createFormData } from "../utilities/formDataUtils";
import { getToken } from "./getToken";

type news = {
  id?: number,
  name: string,
  content: string,
  imageFile?: File,
  image: string,
  type?: string,
  categoryId: number
}

export async function getNews(): Promise<any> {

  let response = await axios.get('/api/news');

  return response.data;

}

export async function getNewsAmountService(limit:number){
  let response = await axios.get(`/api/news?limit=${limit}`);
  return response.data;
}

export async function GetDetailsNews(id: string): Promise<AxiosResponse> {

  let news = await axios.get(`/api/news/${id}`);
  return news;

}

export async function deleteNew(id: string): Promise<any> {

  let response = await axios.delete(`/api/news/${id}`,getToken());


  return response;

}

export async function createNew(news:news): Promise<any> {
  const formData = createFormData<news>(news);

  let response = await axios.post(`/api/news`, formData,
  {headers:{
    ...getToken(),
    "Content-Type": "multipart/form-data"
  }});

  return response;

}

export async function updateNew(news: news): Promise<any> {
  const formData = createFormData<news>(news);

  let response = await axios.put(`/api/news/${news.id}`, formData, {
    headers: {
      ...getToken(),
      "Content-Type": "multipart/form-data"
    }
  });

  return response;
}