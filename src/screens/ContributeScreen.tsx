import React from 'react';
import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';

function ContributeScreen():JSX.Element{

    return (
        <Box w="100%">
        <Flex w="90%" h="200px" m="0px auto" justifyContent="space-evenly" alignItems="center">
        <h6>¡Contribuye!</h6>
        <Button size="md" colorScheme="teal" color="white">Contribuir</Button>
        </Flex>
        </Box>
    )
}
export default ContributeScreen;