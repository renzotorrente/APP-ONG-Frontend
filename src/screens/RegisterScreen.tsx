import React from "react";
import FormRegister from "../components/FormRegister/FormRegister";
import { Heading } from "@chakra-ui/layout";

const RegisterScreen = (): JSX.Element => {
  return (
    <>
      <Heading mb={5} align="center">
        Registro
      </Heading>
      <FormRegister />
    </>
  );
};
export default RegisterScreen;
