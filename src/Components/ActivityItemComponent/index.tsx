import { Box, Center, useColorModeValue, Image, Stack, Heading, Text } from '@chakra-ui/react'
import classes from './styles/index.module.css'
import React from 'react'
import { ActivityItemProp } from './types'

const ActivityItemComponent = ({imageUrl, title }:ActivityItemProp) => {
  return (
    <Center py={6} height="100%">
    <Box
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
      height="100%"
    >
      <Box
        h={"210px"}
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        pos={"relative"}
      >
        <Image src={imageUrl} layout={"fill"} className={classes.img} />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {title}
        </Heading>
      </Stack>
    </Box>
  </Center>
  )
}

export default ActivityItemComponent
