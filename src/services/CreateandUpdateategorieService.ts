import { category } from '../components/CategoriesFormComponent/types';
import axios from 'axios';
export async function CreateCategory(category:category):Promise<any>{
let resp = await axios.post('http://localhost:8080/api/categories',category);
return resp;
}
export async function UpdateCategory(category:category):Promise<any>{
let resp = await axios.put(`http://localhost:8080/api/categories/${category.id}`,category);
return resp;
}