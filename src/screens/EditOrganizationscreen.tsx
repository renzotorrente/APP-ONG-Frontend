import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Center, Spinner, Stack } from '@chakra-ui/react';
import FormEditOrganization from '../components/EditOrganization/FormEditOrganization';
import { useQuery } from 'react-query';
import { getOrganization } from '../services/organizationService';
export function EditOrganizationscreen(): JSX.Element {

  const { isLoading, isSuccess, isError, error, data } = useQuery(["organization", "1"], async () => {
    const res = await getOrganization(1);
    return res
  })

  if (isLoading) {
    return <Center w="100%"> <Spinner m="10px" size="xl" color="blue" thickness="5px" /></Center>
  }

  if (isError) {
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  }

  return (
    <>
      <Stack height="100vh" m="11px" w={{ base: "auto", md: "90%" }}>
        <FormEditOrganization action='update' ong={data} />
      </Stack>
    </>
  )

}