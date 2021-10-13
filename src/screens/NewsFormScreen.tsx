import React from "react";
import ContentEditor from "../components/NewsForm/ContentEditor";
import {
  Heading,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Select,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { TParams } from "../components/NewsForm/NewsFormTypes";
import { RouteComponentProps } from "react-router-dom";
import ImageInputComponent from "../components/ImageInputComponent/ImageInputComponent";
import useNewsFormScreenHook from "./NewsFormScreenHook";



const NewsFormScreen = ({ match }: RouteComponentProps<TParams>) => {

  const { categories, editMode, formData, handleChange, handleSubmit, loading, newsState, setFormContent, setFormData, formContent } = useNewsFormScreenHook(match.params.id)

  if (editMode && newsState.isLoading) {
    return <Spinner color="green" size="xl" thickness="5px" />
  }

  if (editMode && newsState.error.isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error</AlertTitle>
        <AlertDescription>{newsState.error.message}</AlertDescription>
      </Alert>)
  }

  return (
    <Container maxW="container.xl">
      <Stack spacing="5">
        <Heading size="2xl"> Formulario de novedades </Heading>
        <Heading>
          {" "}
          {!editMode ? "Crear una novedad" : "Editar novedad"}{" "}
        </Heading>
        <form
          onSubmit={handleSubmit}
        >
          <Stack spacing="5">
            <FormControl>
              <FormLabel>Título</FormLabel>
              <Input
                name="name"
                onChange={handleChange}
                value={formData.name}
                backgroundColor="white"
              ></Input>
            </FormControl>
            {categories.isLoading ?
              <Spinner colorScheme="green" size="md" thickness="5px" /> :
              <FormControl>
                <FormLabel>Categoría</FormLabel>
                <Select
                  name="categoryId"
                  onChange={handleChange}
                  backgroundColor="white"
                  value={formData.categoryId}
                >
                  <option key={0} value={0} disabled>Selecione una categoria</option>
                  {categories.categories.map((cat) =>
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  )}
                </Select>
              </FormControl>}
            <ImageInputComponent name="image" src={formData.image} setImgForm={setFormData} />
            <FormLabel>Contenido</FormLabel>
            {loading ? null : (
              <ContentEditor
                formContent={formContent}
                setFormContent={setFormContent}
              />
            )}

            <Button marginTop={4} colorScheme="teal" type="submit" width={"100%"}>
              Guardar cambios
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default NewsFormScreen;
