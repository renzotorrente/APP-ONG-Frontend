

import { Container, Center, Heading, Spinner, Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import { getDetailContactService } from '../services/contactService';

export const BODetailContactsScreen = () => {
    
    const params = useParams();
    const id = params.id;

    const{data, isError, isLoading, error} = useQuery(['getDetailContact', id], ()=> getDetailContactService(id));

    if(isLoading) return <Center mb={4}><Spinner size="xl" color="green" thickness="5px" /></Center>

    if(isError) return <Center mb={4}><Heading size="lg">Ha ocurrido un error: {error.message}</Heading></Center>

    return (
        <Container maxW="container.lg" >
            <Heading paddingBottom='30px' color='blue.400'>Mensaje de {data.name}</Heading>
            <Box border="1px" borderColor="gray.200" padding='25px'>
                <Text fontSize='2xl'><strong>Nombre:  </strong>{data.name}</Text>
                <Text fontSize='2xl'><strong>Teléfono:  </strong>{data.phone}</Text>
                <Text fontSize='2xl'><strong>Email:  </strong>{data.email}</Text>
                <Text fontSize='2xl'><strong>Mensaje:</strong></Text>
                <Text fontSize='2xl'><i>{data.message}</i></Text>
            </Box>
            <Link to='/backoffice/contacts'>Volver atras</Link>
        </Container>
    )
}
