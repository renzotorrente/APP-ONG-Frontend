import { useMutation, useQuery, useQueryClient } from "react-query";
import { Activity } from "../components/ActivitiesListComponent/types";
import { errorAlert, questionAlert, successAlert } from "../components/alertBox";
import { deleteActivity, getActivities } from "../services/activitiesServices";

const useActivitiesActions = () => {
  
  const {isError, isFetching, isSuccess, data: activities, error } = useQuery("activities", async ()=> {
    const res =  await getActivities()
    return res.data
  })
  const err = error as Error;
  const queryClient = useQueryClient();
  
  const {mutate} = useMutation("activities", async (id:number)=>{
    const res = await deleteActivity(id)
    return res.data
  },
  {
    onError: () => {
      errorAlert({text: "Error al intentar borrar la actividad", title: "Error"})
    },
    onSuccess: (data, variables) => {
      let activities = queryClient.getQueryData<Array<Activity>>("activities");
      if(activities){
        queryClient.setQueryData("activities", activities.filter(a => a.id !== variables))
      }
      successAlert({text: "Actividad borrada con exito", title: "Exito"})
    }
  })
  
  const onActivityDelete = (id:number) => (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    questionAlert({title: "Borrar actividad", text: "Esta seguro que desea borrar esta actividad?"},{
      confirmed: () => {
        mutate(id);
      }
    })
  }
  
  const onActivityEdit = (id:number) => (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  
  }

  return {
    isError,
    isFetching,
    isSuccess,
    activities,
    error: err,
    onActivityDelete,
    onActivityEdit
  }
}

export default useActivitiesActions