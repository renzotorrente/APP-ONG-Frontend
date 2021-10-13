import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import IndexActivitiesFormComponent from '../components/ActivitiesFormComponent/IndexActivitiesFormComponent'

const BOCreateActivityScreen = () => {
  return (
    <Container>
      <Heading>Crear Actividad</Heading>
      <IndexActivitiesFormComponent UploadUrl=''></IndexActivitiesFormComponent>
    </Container>
  )
}

export default BOCreateActivityScreen
