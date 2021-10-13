import axios, { AxiosResponse } from 'axios'
import { BASEPATH_ORGANIZATION, PATHPUBLIC } from '../constants/constants'

import { createFormData } from '../utilities/formDataUtils'
import { getToken } from './getToken'

export const getTestimonialsPublic = async (
  id: number
): Promise<AxiosResponse> => {
  const response = await axios.get(BASEPATH_ORGANIZATION + id + PATHPUBLIC)
  return response
}

type testimonials = {
  id?: number
  name: string
  content: string
  image: string
}

export async function getTestimonials(): Promise<any> {
  let response = await axios.get('/api/testimonials')

  return response.data
}

export async function GetDetailsTestimonials(
  id: string
): Promise<AxiosResponse> {
  let testimonials = await axios.get(`/api/testimonials/${id}`)
  return testimonials
}

export async function deleteTestimonial(id: string): Promise<any> {
  let response = await axios.delete(`/api/testimonials/${id}`, getToken())

  return response
}

export async function createTestimonial(
  testimonials: testimonials
): Promise<any> {
  const formData = createFormData<testimonials>(testimonials)

  let response = await axios.post(`/api/testimonials`, formData, {
    headers: {
      ...getToken(),
      'Content-Type': 'multipart/form-data',
    },
  })

  return response
}

export async function updateTestimonial(
  testimonials: testimonials
): Promise<any> {
  const formData = createFormData<testimonials>(testimonials)

  let response = await axios.put(
    `/api/testimonials/${testimonials.id}`,
    formData,
    {
      headers: {
        ...getToken(),
        'Content-Type': 'multipart/form-data',
      },
    }
  )

  return response
}
