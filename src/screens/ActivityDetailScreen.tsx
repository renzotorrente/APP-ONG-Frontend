import React, {useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { ActivityIsError } from '../components/ActivityDetailComponents/ActivityIsError';
import { ActivitiDetailService } from '../services/ActivityDetailService';
import { Spinner, Stack } from '@chakra-ui/react';
import { ActivityIsSucces } from '../components/ActivityDetailComponents/ActivityIsSucces';
export function ActivityDetailScreen():JSX.Element{
let {id}:{id: string}= useParams();
const{data,isError, isLoading, status} = useQuery(['activity', id], ()=>ActivitiDetailService(id), {retryOnMount:true});

return (
 <Stack w={{base:"auto",md:"80%",lg:"100%"}} minH="auto">
 {isLoading && ( <Spinner size="xl" speed="0.65s" emptyColor="gray.200" color="blue.500" m="20px auto"/>)}
 {isError && <ActivityIsError/>}
 {data && <ActivityIsSucces activity={data}/>}
 </Stack>
)

}