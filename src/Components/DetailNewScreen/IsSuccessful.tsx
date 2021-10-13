import { Image, Stack, Text, Heading, Box, Icon, Flex } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import React from "react";
function IsSuccessful({ novedad }: { novedad: any }) {
  console.log(novedad.image);
  return (
    <Stack w={{ base: "auto", md: "70%", lg: "70%" }} minH="auto" margin='auto'>
      <Heading as="h2" size="lg">
        {novedad.name}
      </Heading>
      <Text fontSize="xs" color="#4E474E">
        <Icon as={CalendarIcon} size="xs" /> {novedad.createdAt.slice(0, 10)}
      </Text>
      <Flex w={{ base: "100%", lg: "70%" }} m="10px auto">
        <Image
          boxSize="90%"
          maxH={{ base: "300px", md: "400px" }}
          src={novedad.image}
        />
      </Flex>
      <Text fontSize="sm" color="#4E474E">
        {novedad.name}
      </Text>
      <Box>
        <div dangerouslySetInnerHTML={{ __html: novedad.content }} />
      </Box>
    </Stack>
  );
}
export default IsSuccessful;
