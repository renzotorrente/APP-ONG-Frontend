import { Center, Container, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { NewType } from "../components/HomeNews/HomeNewsComponentType";

import TableNews from "../components/TableNews/TableNews";
import { deleteNew, getNews } from "../services/newsService";


const BackOfficeNewsListScreen = (): JSX.Element => {
  const { isLoading, isError, data, error }= useQuery<NewType[], Error>("getNews", getNews);

  const queryClient = useQueryClient()

  const deleteNewMutation = useMutation((id:string) => deleteNew(id), {
    onSuccess: (data, variable) => {
      //I get the news cached from the getNew query
      let news = queryClient.getQueryData<NewType[]>('getNews');
      
      if( news != undefined){
        //I delete the news deleted from the cache
        news = news.filter((element:NewType) => element.id !== Number(variable))
        queryClient.setQueryData('getNews', news);
      }
    },
    onError: error => {
      console.log(error)
    }
  })

  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" color="blue" thickness="5px" />
      </Center>
    );
  }

  if (isError)
    return (
      <Text align="center" fontSize="3xl" color="blue.800">
        Ha ocurrido un error: {error.message}
      </Text>
    );

  if (data.length === 0)
    return (
      <Text align="center" fontSize="3xl" color="blue.800">
        No hay novedades
      </Text>
    );

  return (
    <Container maxW="container.xl">
      <Text fontSize="3xl" color="blue.800" textAlign="center">
        Novedades del sitio
      </Text>
      <TableNews data={data} deleteNewMutation={deleteNewMutation}/>
    </Container>
  );
};

export default BackOfficeNewsListScreen;
