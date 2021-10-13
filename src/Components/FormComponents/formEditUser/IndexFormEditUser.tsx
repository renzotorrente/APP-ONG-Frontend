import React from 'react'
import { useForm } from 'react-hook-form';
import { FormDataType, FormUpdateUserProps } from './types';
import FirstNameField from './FirstNameField';
import LastNameField from './LastNameField';
import RoleField from './RoleField';
import { Button} from "@chakra-ui/react";

const IndexFormEditUser = ({onSubmit, isAdmin, defaultValues}:FormUpdateUserProps) => {

  const { register, handleSubmit, formState: { errors }, } = useForm<FormDataType>({defaultValues, mode: 'onBlur'});

  onSubmit = handleSubmit(onSubmit) 

  return (
    <form onSubmit={onSubmit} id="updateUserForm">
      <FirstNameField register={register} errors={errors}/>

      <LastNameField register={register} errors={errors}/>

      {
        isAdmin && 
        <RoleField register={register} errors={errors}/>
      }

      <Button colorScheme="blue" w="100%" type='submit'>Actualizar</Button>
    </form>
  )
}

export default IndexFormEditUser
