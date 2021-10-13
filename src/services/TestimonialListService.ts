import axios, { AxiosResponse } from 'axios'
import clientAxios from '../configs/clientAxios';

export async function TestimonialListService (): Promise<any> {
  const response = await clientAxios.get('/api/testimonials');
  return response.data
}
