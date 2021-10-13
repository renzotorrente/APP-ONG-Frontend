import React from "react";
import { typelist } from "./types";
import {
  SimpleGrid,
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Icon,
  Avatar,
  Center,
  Button
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link, useHistory } from "react-router-dom";
export function ListComponent({ list }: { list: typelist[] }): JSX.Element {

  if (list.length < 1) {
    return (
        <Heading as="h2" size="xl" textAlign="center">
          Todavia no tienes ningun{" "}
          <strong style={{ color: "#008080" }}>Contacto</strong>
        </Heading>
    );
  }

  return (
    <Box
      w={{ base: "350px", md: "500px", lg: "650px" }}
      margin="10px auto"
      p="10px"
    >
      {list.map((element: typelist) => (
        <Grid
          templateColumns="repeat(3, 1fr)"
          w={{ base: "auto", md: "85%", lg: "90%" }}
          h={{ base: "auto", md: "40px", lg: "45px" }}
          p="10px"
          alignItems="center"
          gap={1}
          borderBottom="1px solid #ccc"
          key={element.id}
        >
          <GridItem>
            <Avatar size="xs" /> {element.name}
          </GridItem>
          <GridItem>
            <Icon color="teal" as={EmailIcon} /> {element.email}
          </GridItem>
          <GridItem>
            <Link to={`/backoffice/contacts/${element.id}`}>Ver mensaje</Link>
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
}
