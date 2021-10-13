import { useMutation, useQuery, useQueryClient } from "react-query";
import { errorAlert, questionAlert, successAlert } from "../components/alertBox";
import { Category } from "../components/CategoriesListComponent/types";
import { deleteCategory, getCategories } from "../services/categoriesService";

const useBOCategoriesScreenHook = () => {
  const {isError, isFetching, isSuccess, data: categories, error } = useQuery("categories", async ()=> {
    const res =  await getCategories()
    return res.data
  })
  const err = error as Error;
  const queryClient = useQueryClient();

  const {mutate: deleteM} = useMutation("categories", async (id:number)=>{
    const res = await deleteCategory(id)
    return res.data
  },
  {
    onError: () => {
      errorAlert({text: "Error al intentar borrar la categoria", title: "Error"})
    },
    onSuccess: (data, variables) => {
      let categories = queryClient.getQueryData<Array<Category>>("categories");
      if(categories){
        queryClient.setQueryData("categories", categories.filter(a => a.id !== variables))
      }
      successAlert({text: "Categoria borrada con exito", title: "Exito"})
    }
  })
  
  const onCategoryDelete = (id:number) => (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    questionAlert({title: "Borrar categoria", text: "Esta seguro que desea borrar esta categoria?"},{
      confirmed: () => {
        deleteM(id);
      }
    })
  }

  return {
    isError,
    isFetching,
    isSuccess,
    categories,
    error: err,
    onCategoryDelete
  }
}

export default useBOCategoriesScreenHook;