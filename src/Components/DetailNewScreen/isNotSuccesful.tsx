import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
function IsNotSuccesful(){
return (
 <Box m="15px auto">
 <Heading as="h2" size="xl">No pudimos encontrar la novedad que  <strong style={{color:"#008080"}}>buscabas</strong> </Heading>
 </Box>
)}
export default IsNotSuccesful;
