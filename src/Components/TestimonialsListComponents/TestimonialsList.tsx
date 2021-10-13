import React, { useEffect, useState } from "react";
import {  Spinner, Flex, Center, Container} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { TestimonialListService } from "../../services/TestimonialListService";
import { ListComponent } from "./ListComponent";

export function TestimonialsList() {
  let { data, isError, isLoading } = useQuery("testimonials", TestimonialListService );

  if(isLoading) return  <Center><Spinner size="xl" color="blue" thickness="5px" /></Center>

  return (
    <Flex w={{ base: "40%", md: "65%", lg: "80%" }} minH="auto" justify='center' margin='auto'>
      <ListComponent list={data}></ListComponent>
    </Flex>
  );
}
