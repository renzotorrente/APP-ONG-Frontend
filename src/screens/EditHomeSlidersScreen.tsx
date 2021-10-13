import React from 'react'
import { getSliders } from '../services/sliderServices'
import { useQuery } from 'react-query';
import { Center, Spinner } from '@chakra-ui/react';
import EditHomeSlider from './EditHomeSliders';

export const EditHomeSlidersScreen = () => {
    const { isLoading, data } = useQuery('getSliders', getSliders);

    if(isLoading) return <Center mb={4}><Spinner size="xl" color="green" thickness="5px" /></Center>

    return (
        <>
            <EditHomeSlider SliderData={data}/>
        </>
    )
}
