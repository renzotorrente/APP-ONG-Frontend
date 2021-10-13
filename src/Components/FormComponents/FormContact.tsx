import {
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  Textarea,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFormContactHook } from "./FormContactHook";
import { PATTERN_EMAIL } from "../../constants/constants";

export const FormContact = (): JSX.Element => {

 const {handleSubmit, mutate, register, errors, isLoading} = useFormContactHook();

  const onSubmit = handleSubmit((data) => {
    mutate(data)
  });

  return (
    <form onSubmit={onSubmit}>
      <FormControl id="name" mb={3}>
        <FormLabel fontSize="1.1rem">Nombre: </FormLabel>
        <Input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />
        {errors.name && <Text color="red">Requerido</Text>}
      </FormControl>

      <FormControl id="email" mb={3}>
        <FormLabel fontSize="1.1rem">Email:</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: PATTERN_EMAIL,
          })}
        />
        {errors.email?.type === "required" && (
          <Text color="red">Requerido</Text>
        )}
        {errors.email?.type === "pattern" && (
          <Text color="red">Email Invalido</Text>
        )}
      </FormControl>

      <FormControl id="message" mb={3}>
        <FormLabel fontSize="1.1rem">Mensaje:</FormLabel>
        <Textarea
          placeholder="Mensaje"
          size="sm"
          {...register("message", { required: true })}
          minH="200px"
        />
        {errors.message && <Text color="red">Requerido</Text>}
      </FormControl>

      {isLoading ? (
        <Center>
          <Spinner size="xl" color="green" thickness="5px" />
        </Center>
      ) : (
        <Button colorScheme="green" variant="solid" type="submit" w="100%">
          Enviar contacto
        </Button>
      )}
    </form>
  );
};
