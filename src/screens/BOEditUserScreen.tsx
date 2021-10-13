import React from 'react'
import { Text, Center, Spinner, Container } from '@chakra-ui/react'
import { useMutation, useQuery } from 'react-query'

import IndexFormEditUser from '../components/FormComponents/formEditUser/IndexFormEditUser'
import { getUserByIdService, updateUserService } from '../services/userService'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { userType } from '../components/FormComponents/formEditUser/types'
import { errorAlert } from '../components/alertBox'
import { useAppSelector } from '../store'

const BOEditUserScreen = (): JSX.Element => {
  const history = useHistory()
  const { role, id: User_id } = useAppSelector(({ Auth }) => Auth)
  // i get the id of the route
  const { id } = useParams<{ [index: string]: string }>()

  //get the user
  const { isLoading, isError, data, error } = useQuery(
    ['getUserById', id],
    () => getUserByIdService(id)
  )

  //update the user
  const mutation = useMutation(
    (data: { id: string; user: userType }) =>
      updateUserService(data.id, data.user),
    {
      onError: (error) => {
        errorAlert({
          text: `Error al intentar actualizar el usuario, ${error}`,
          title: 'Error',
        })
      },
      onSuccess: (data) => {
        //redirect
        history.push('/backoffice/users')
      },
    }
  )

  const submitUser = (user: userType) => {
    mutation.mutate({ id: id, user: user })
  }

  if (role !== 'admin' && id != User_id) {
    return <Redirect to={'/'} />
  }

  if (isLoading)
    return (
      <Center w="100%">
        <Spinner m="10px" size="xl" color="blue" thickness="5px" />
      </Center>
    )

  if (isError)
    return (
      <Text w="100%" align="center" fontSize="3xl" color="blue.800">
        Ha ocurrido un error
      </Text>
    )

  return (
    <Container>
      <IndexFormEditUser
        onSubmit={submitUser}
        isAdmin={role === 'admin'}
        defaultValues={data}
      />
    </Container>
  )
}
export default BOEditUserScreen
