import { Box, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { getConstructionImage } from "../services/fakeOrganizationsService";

const ContactScreen = (): JSX.Element => {
  return (
    <>
      <Heading mb={5} align="center">
        En construcción
      </Heading>
      <Box p={5}>
        <Text as="p" color="facebook.700" fontSize="1.1rem" textAlign="center">
          Esta sección está en construcción. ¡Más adelante estará disponible!
        </Text>
      </Box>
      <Image
        src={getConstructionImage().image}
        boxSize="md"
        m="2"
        display="block"
        marginLeft="auto"
        marginRight="auto"
      />
    </>
  );
};
export default ContactScreen;
