import { Center, Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import HomeTestimonialsComponent from "../components/HomeTestimonials/HomeTestimonialsComponent";
import { TestimonialType } from "../components/HomeTestimonials/HomeTestimonialsComponentType";
import { getTestimonials } from "../services/testimonialsService";

const TestimonialsScreen = (): JSX.Element => {
  const { isLoading, isError, data, error } = useQuery(
    "getTestimonials",
    getTestimonials
  );

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
        No hay Testimonios
      </Text>
    );

  return (
    <Container maxW="container.xl">
      <Text fontSize="3xl" color="blue.800" textAlign="center">
        Testimonios
      </Text>
      {/* <SimpleGrid columns={[1, 1, 1, 1, 2]} spacing={1}> */}
      {data.map((element: TestimonialType) => (
        // <Link to={`/novedad/${element.id}`} key={element.id}>
        <HomeTestimonialsComponent
          key={element.id}
          title={element.name}
          imageUrl={element.image}
          text={element.content}
        />
        // </Link>
      ))}
      {/* </SimpleGrid> */}
    </Container>
  );
};

export default TestimonialsScreen;
