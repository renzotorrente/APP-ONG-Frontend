import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { TestimonialsType } from "./HomeTestimonialsComponentType";
import classes from "./styles/homeTestimonials.module.css";

export default function MainLogin(props: TestimonialsType): JSX.Element {
  const { title, text, imageUrl } = props;
  return (
    <Center py={6} height="100%">
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        height="100%"
      >
        <SimpleGrid columns={[1, 2]} spacing="40px">
          <Image
            src={imageUrl}
            layout={"fill"}
            className={classes.img}
            objectFit="cover"
          />
          <Box display="flex" alignItems="center">
            <div>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {title}
              </Heading>
              <Text
                color={"gray.500"}
                className={classes.textStyle}
                mt={3}
                as="i"
              >
                {text}
              </Text>
            </div>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
}
