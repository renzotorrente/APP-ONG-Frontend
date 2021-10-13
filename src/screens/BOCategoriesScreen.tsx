import { Alert, AlertDescription, AlertIcon, AlertTitle, Heading, Spinner } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';
import CategoriesList from '../components/CategoriesListComponent';
import useBOCategoriesScreenHook from './BOCategoriesScreenHook';

const BOCategoriesScreen = ():JSX.Element => {

  const history = useHistory();

  const {
    isError,
    isFetching,
    isSuccess,
    categories,
    error,
    onCategoryDelete
  } = useBOCategoriesScreenHook();

  const onEditButtonClick = (id:number) => (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    history.push("/backoffice/edit/categories/" + id)
  }

  return (
    <>
      <Heading mb={5} align="center">
        Listado de Categorias
      </Heading>
      {
        isError &&
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      }
      {
        isFetching &&
        <Spinner size="xl" colorScheme="blue" />
      }
      {
        isSuccess &&
        <CategoriesList categories={categories} onDelete={onCategoryDelete} onEdit={onEditButtonClick}/>
      }
    </>
  );
}

export default BOCategoriesScreen;