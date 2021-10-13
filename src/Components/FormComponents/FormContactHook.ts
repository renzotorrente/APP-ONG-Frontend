import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { createContact } from "../../services/contactService";
import { errorAlert, successAlert } from "../alertBox";
import { FormContactType } from "./FormContactTypes";


export const useFormContactHook = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutate} = useMutation("getListContact", async (contact:FormContactType) => {
    const res = await createContact(contact)
    return res.data;
  }, {
    onError: () => {
      errorAlert({text: "Error al intentar guardar su mensaje", title: "Error"})
    },
    onSuccess: (data) => {
      let contacts = queryClient.getQueryData<Array<FormContactType>>("getListContacts");
      if(contacts){
        queryClient.setQueryData("getListContacts", [...contacts,data])
      }
      successAlert({text: "Mensaje enviado con exito", title: "Exito"})
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormContactType>({ mode: "onBlur" });

  return {
    register,
    handleSubmit,
    errors,
    mutate,
    isLoading
  }
}