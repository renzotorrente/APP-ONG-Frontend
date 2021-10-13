import { AxiosResponse } from "axios";
import axios from 'axios';
import {PATH_TESTIMONIAL } from '../constants/constants';
import { getToken } from './getToken';
export async function CreateTestimonialService(Testimonial:any):Promise<AxiosResponse>{
let resp = await axios.post(PATH_TESTIMONIAL, Testimonial, getToken());
return resp;

}

export async function UpdateTestimonial(Testimonial:any, id:number):Promise<AxiosResponse>{
let resp = await axios.patch(PATH_TESTIMONIAL + id, Testimonial, getToken());
 return resp;
}