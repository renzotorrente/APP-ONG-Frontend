import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex, Heading, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { RouteComponentProps } from 'react-router-dom'
import { Category } from '../components/CategoriesListComponent/types'
import { TParams } from '../components/NewsForm/NewsFormTypes'
import { getCategoryById } from '../services/categoriesService'
import { CategoriesFormScreen } from './CategoriesFormScreen'

const CategoriesEditScreen = ({ match: { params: { id } } }:RouteComponentProps<TParams>) => {

  const { isError, isLoading, isSuccess, data: category } = useQuery<Category>(["category", id], async () => {
    const res = await getCategoryById(id);
    return res.data;
  })

  if (isLoading) {
    return <Flex justifyContent="center"><Spinner color="green" size="xl" thickness="5px" /></Flex>
  }
  
  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error</AlertTitle>
        <AlertDescription>Error al buscar categoria</AlertDescription>
      </Alert>)
  }

  return (
    <>
    <Heading mx="auto" mt="1" textAlign="center">Editar Categoría</Heading>
    <CategoriesFormScreen category={category} />
    </>
  )
}

export default CategoriesEditScreen
