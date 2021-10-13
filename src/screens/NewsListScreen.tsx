import { Center, Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import HomeNewsComponent from "../components/HomeNews/HomeNewsComponent";
import { NewType } from "../components/HomeNews/HomeNewsComponentType";
import { getNews } from "../services/newsService";

const NewsListScreen = (): JSX.Element => {
  const { isLoading, isError, data, error } = useQuery("getNews", getNews);

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
      <SimpleGrid columns={[1, 2, null, 4]} spacing={4}>
        {data.map((element: NewType) => (
          <Link to={`/novedad/${element.id}`} key={element.id}>
            <HomeNewsComponent title={element.name} imageUrl={element.image} />
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default NewsListScreen;
