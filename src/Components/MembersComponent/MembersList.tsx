import { Grid,GridItem,Icon,Avatar ,Text} from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { MemberService } from '../../services/MemberService';
import { FakedataMembers } from './FakeDataMembers';
import { member } from './MemberType';
export function MemberList():JSX.Element{
const {data, isLoading, isError,error} = useQuery('Members',MemberService);
return(
    <>
  {/* DESCOMENTAR CUANDO ENDPOINT DE Miembros ESTÉ LISTO 
  isLoading &&  <Center w="100%"> <Spinner m="10px" size="xl" color="blue" thickness="5px" /> </Center>
  /*}
   {/* DESCOMENTAR CUANDO ENDPOINT DE Miembros ESTÉ LISTOisError && <Text w="100%" align='center' fontSize="3xl" color="blue.800">
   Ha ocurrido un error: {error}</Text> */}
<Grid templateColumns="repeat(3, 1fr)" gap={2}  w={{ base: "auto", md: "auto", lg: "90%" }}
        h={{ base: "auto", md: "40px", lg: "45px" }}
        p="10px"
        alignItems="center">
    {FakedataMembers.map((elem:member)=>(
        <GridItem key={elem.id} textAlign="center" mb="10px" >
        <GridItem mb="4px">
          <Avatar size="lg" src={elem.image? elem.image :""}/>
        </GridItem>
        <GridItem textAlign="center"><Text fontSize={{base:"sm", md:"md"}}>{elem.name}</Text></GridItem>
        </GridItem>
    ))}
    
    </Grid>
</>

)
}