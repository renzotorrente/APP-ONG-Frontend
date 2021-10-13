import React from 'react'
import { ListContactService } from '../../services/ListContactService'
import { useQuery } from 'react-query';
import { Center, Spinner,Box,Text,Heading,Flex } from '@chakra-ui/react';
import { ListComponent } from './ListComponent';

export function ListContactScreen():JSX.Element{
const { isLoading, isError, data, error} = useQuery('getListContact', ListContactService)

  if( isLoading ) return <Center w="100%"> <Spinner m="10px" size="xl" color="blue" thickness="5px" /></Center>

  if( isError ) return <Text w="100%" align='center' fontSize="3xl" color="blue.800">Ha ocurrido un error</Text>

return (
 <Flex w="100%" justify='center'>
  <ListComponent list={data}/>
</Flex>
)
}