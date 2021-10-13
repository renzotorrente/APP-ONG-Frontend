import { Flex, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const CategoriesListHeader = () => {
  return (
    <ListItem bg="#95a5a6" px="6" py="6" borderRadius="sm" mb="0"
    boxShadow="sm">
    <Flex>
      <Text fontSize="md" textTransform="uppercase" fontWeight="bold">
        Categorias
      </Text>
      <Spacer />
    </Flex>
    </ListItem>
  )
}

export default CategoriesListHeader
