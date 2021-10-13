import React from 'react';
import { Heading, Box } from '@chakra-ui/layout';
export function ActivityIsError(){
return (
 <Box m="15px auto">
 <Heading as="h2" size="xl">No pudimos encontrar la actividad que  <strong style={{color:"#008080"}}>buscabas</strong> </Heading>
 </Box>

)

}