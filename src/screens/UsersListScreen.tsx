import React from "react";
import UsersList from "../components/UsersListComponent/UsersList";
import { Heading } from "@chakra-ui/layout";

const LoginScreen = (): JSX.Element => {
  return (
    <>
      <Heading mb={5} align="center">
        Listado de usuarios
      </Heading>
      <UsersList />
    </>
  );
};
export default LoginScreen;
