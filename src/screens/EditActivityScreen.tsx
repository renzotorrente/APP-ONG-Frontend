import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, Container, Heading, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import IndexActivitiesFormComponent from '../components/ActivitiesFormComponent/IndexActivitiesFormComponent'
import { getActivityById } from '../services/activitiesServices'


const EditActivityScreen = ({}): JSX.Element => {

  const params = useParams();
  const id = params.id;

  //get the activity of the api
  const {isLoading, isError, isSuccess, data:activity, error} = useQuery(['getActivityById', id], () => getActivityById(id))

  return (
     <Container>
         {
            isLoading 
        && 
            <Center><Spinner size="xl" color="blue" thickness="5px" /></Center>
        }
        {
            isError 
         && 
            <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Error</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
            </Alert>
        }
        {
            isSuccess 
        &&  
            <>
            <Heading>Editar Actividad</Heading>
            <IndexActivitiesFormComponent Activitie={activity} UploadUrl=''></IndexActivitiesFormComponent>
            </>
        }
         
     </Container>
  )

}

export default EditActivityScreen
