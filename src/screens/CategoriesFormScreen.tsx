import React, { useState } from "react";
import { category, values } from "../components/CategoriesFormComponent/types";
import {
  Stack,
  FormControl,
  Input,
  FormLabel,
  Box,
  Button,
  FormHelperText,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { CatgValid } from "../constants/constants";
import { OnSubmit } from "../components/CategoriesFormComponent/OnSubmitcategory";
export function CategoriesFormScreen({ category }: { category?: category }) {
  let [errorsubmit, seterrorsubmit] = useState("");
  let {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: category?.name ? category.name : "",
      description: category?.description ? category.description : "",
    },
  });
  function handlecategory(values: values) {
    OnSubmit(values, seterrorsubmit, reset, category);
  }
  return (
    <Box w="100%" h="auto">
      <Stack w="50%" m="20px auto">
        <form onSubmit={handleSubmit(handlecategory)}>
          <FormControl mb="10px">
            <FormLabel>Nombre de categoria</FormLabel>
            <Input
              {...register("name", {
                required: CatgValid.name.req,
                minLength: {
                  value: CatgValid.name.minnum,
                  message: CatgValid.name.minMsg,
                },
                maxLength: {
                  value: CatgValid.name.maxnum,
                  message: CatgValid.name.maxMsg,
                },
              })}
            />
            <FormHelperText color="red" size="sm" mt="5px">
              {errors.name?.message}
            </FormHelperText>
          </FormControl>
          <FormControl mb="10px">
            <FormLabel>Descripcción</FormLabel>
            <Input
              {...register("description", {
                required: CatgValid.descrip.req,
                minLength: {
                  value: CatgValid.descrip.minnum,
                  message: CatgValid.descrip.minMsg,
                },
                maxLength: {
                  value: CatgValid.descrip.maxnum,
                  message: CatgValid.descrip.maxMsg,
                },
              })}
            />
            <FormHelperText color="red" size="sm">
              {errors.description?.message}
            </FormHelperText>
          </FormControl>
          <Flex justifyContent="center" w="100%" mt="15px" wrap="wrap">
            <Button
              isLoading={isSubmitting}
              w="80%"
              background="teal"
              color="white"
              type="submit"
              _hover={{ background: "#4B8080" }}
            >
              Guardar
            </Button>
            <Text textAlign="center" w="80%" color="red" size="sm">
              {errorsubmit}
            </Text>
          </Flex>
        </form>
      </Stack>
    </Box>
  );
}
