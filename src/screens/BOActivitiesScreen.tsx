import React from "react";
import ActivitiesList from "../components/ActivitiesListComponent/ActivitiesList";
import { Heading } from "@chakra-ui/layout";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";
import useActivitiesActions from "./BOActivitiesScreenHook";

const BOActivitiesScreen = (): JSX.Element => {
  
  const {
    isError,
    isFetching,
    isSuccess,
    activities,
    error,
    onActivityDelete,
    onActivityEdit
  } = useActivitiesActions();

  return (
    <>
      <Heading mb={5} align="center">
        Listado de actividades
      </Heading>
      {
        isError && 
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      }
      {
        isFetching &&
        <Spinner size="xl" colorScheme="blue"/>
      }
      {
      isSuccess &&
      <ActivitiesList activities={activities} onDelete={onActivityDelete} onEdit={onActivityEdit}/>
      }
    </>
  );
};
export default BOActivitiesScreen;
