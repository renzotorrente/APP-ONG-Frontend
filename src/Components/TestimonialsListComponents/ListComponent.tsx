import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Button, Td, Icon, Flex, Stack } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/layout';
import { testimonials } from './typetestimonials';

export function ListComponent({list}:{list:testimonials[]}){

  if(list.length === 0) return <Heading as="h2" ml={{sm:"10px", md:"30px", lg:"90px"}} >No hay testimonios</Heading>

return(
 <Stack w={{sm:"50%", md:"70%", lg:"80%"}} m={{base:"0px 10px",lg:"20px 10px"}} h="auto">
  <Heading as="h2" ml={{sm:"10px", md:"30px", lg:"90px"}} as="u">Testimonios</Heading>
 <Table >
  <Tbody >
    {
    
    list.map((list:any) =>(
     <Tr variant="striped"  w={{sm:"60%", md:"90%" , lg:"80%"}} fontSize="lg" key={list.id}>
     <Td textAlign="center" >{list.name.substring(0,25)}</Td>
     <Td textAlign="center">{list.user}</Td>
     <Td textAlign="center">{list.content.substring(0,25)}...</Td>
     <Td textAlign="center"><Button background="teal" color="white" _hover={{background:"#07B5B5"}}><Icon as={EditIcon}/> Editar</Button></Td>
     <Td textAlign="center"><Button  background="tomato" color="white" _hover={{background:"#D86753"}}><Icon as={DeleteIcon}/> Eliminar </Button></Td>
     </Tr>
  ))}
    
    </Tbody>
    </Table>

</Stack>
)

}