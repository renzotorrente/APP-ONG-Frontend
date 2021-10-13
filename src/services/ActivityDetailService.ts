import { AxiosResponse } from "axios";
import axios from 'axios';
import { PATH_URL_ACTIVITY } from '../constants/constants';

export async function ActivitiDetailService (id:string):Promise<string[]>{
    console.log(id);
    try{
    let activity = await axios.get(`http://localhost:8080/api/activities/${id}`);
     return activity.data
    }catch(err:any){
        throw new Error(err);
    }
}