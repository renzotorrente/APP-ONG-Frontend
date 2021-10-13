import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import FormEditOrganization from '../components/EditOrganization/FormEditOrganization';
export function CreateOrganizationscreen():JSX.Element{
return (
    <>
    <Stack  height="100vh" m="11px"  w={{base:"auto", md:"90%"}}>
     <FormEditOrganization action='create'/>
    </Stack>
    </>
)

}