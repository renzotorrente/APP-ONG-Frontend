import { CreateCategory, UpdateCategory } from '../../services/CreateandUpdateategorieService';
import { successAlert } from '../alertBox';
import { category, values } from './types';
export async function OnSubmit(values:values, seterrorsubmit:Function,reset:Function,category?:category){
    seterrorsubmit("");
    if(category){
     UpdateCategory({...values, id: category.id}).then(()=>{
        reset({name:values.name,description:values.description});
        successAlert({title: "Exito!", text:"Categoria actualizada con exito"})
     }).catch(()=>{
    seterrorsubmit("error al actualizar categoria, intenta nuevamente")});
    }else{
       CreateCategory(values).then(()=>{
        reset({name:"",description:""});
        successAlert({title:"Exito!", text:"Categoria creada con exito"})
       }).catch(()=>{
        seterrorsubmit("Error al crear categoria, intenta nuevamente")
       })
    }
}
