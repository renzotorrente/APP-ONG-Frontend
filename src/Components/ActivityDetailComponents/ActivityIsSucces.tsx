import React from 'react';
import { Image, Stack, Text, Heading, Box, Flex } from '@chakra-ui/react';
import { activitydetail } from './activitydetailtype';
export function ActivityIsSucces({ activity }: { activity: any }): JSX.Element {

  return (
    <>
      <Stack w="80%" m="20px auto" minH="auto" p="10px">
        <Heading as="h2" size="lg" mb="20px" >
          {activity.name}

        </Heading>

        {activity.image &&
          <Flex w={{ base: "100%", lg: "70%" }} m="10px">
            <Image
              boxSize="90%"
              maxH={{ base: "300px", md: "400px" }}
              src={activity.image}
            />
          </Flex>
        }

        <Flex w={{ base: "100%", md: "80%", lg: "65%" }}>
          <Box fontSize="lg" lineHeight="tall" letterSpacing="wider" dangerouslySetInnerHTML={activity.content}></Box>
        </Flex>



      </Stack>
    </>
  )

}