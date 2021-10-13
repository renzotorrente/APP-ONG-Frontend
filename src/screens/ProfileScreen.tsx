import {
  Box,
  Button,
  Center,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Flex,
  Spacer,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";


import { ModalUpdateProfile } from "../components/modals/ModalUpdateProfile";


export const ProfileScreen = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SimpleGrid
      columns={[1, null, 2]}
      py={3}
      maxW="1320px"
      m="auto"
      textAlign="start"
    >
      <Center p={5}>
        <Image
          boxSize="150px"
          borderRadius="full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvRFoW-v2KdORp4wD4Iwz0kye24wHQVIfA3ooGUvTikKXuCbmcawf6QmPGjT4n-iWcQo&usqp=CAU"
          alt="usuario"
        />
      </Center>
      <Box p={5}>
        <Heading mb={5} align="center">
          Perfil
        </Heading>
        <Text as="p" color="gray.500" fontSize="1.1rem" mb={4}>
          Nombre:{" "}
        </Text>
        <Text as="p" color="gray.500" fontSize="1.1rem" mb={4}>
          Apellido:{" "}
        </Text>
        <Text as="p" color="gray.500" fontSize="1.1rem" mb={4}>
          Email:{" "}
        </Text>
        <Flex>
          <Spacer />
          <Button colorScheme="blue" variant="solid" me={3} onClick={onOpen}>
            Editar Datos
          </Button>
          <Button colorScheme="red" variant="solid">
            Eliminar Cuenta
          </Button>
        </Flex>
      </Box>

      <ModalUpdateProfile isOpen={isOpen} onClose={onClose} isAdmin={false}/>

    </SimpleGrid>
  );
};
