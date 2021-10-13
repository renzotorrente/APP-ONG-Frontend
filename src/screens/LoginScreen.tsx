import React from "react";
import MainLogin from "../components/Login/MainLogin";
import { Heading } from "@chakra-ui/layout";

const LoginScreen = (): JSX.Element => {
  return (
    <>  
     <Heading mb={5} align="center">
        Inicio de sesión
      </Heading>
      <MainLogin />
    </>
  );
};
export default LoginScreen;
