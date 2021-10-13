import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { capitalize } from '../../utilities/stringUtils';
import { CategoryItemProps } from './types';

const CategoryItem = ({category, onEdit, onDelete}:CategoryItemProps) => {
  const {name, description, id} = category;

  return (
    <ListItem _hover={{
      backgroundColor: "#f1f3d9"
    }} px="5" py="5" borderRadius="sm"
      boxShadow="md"
      bg="#ffffff">
      <Flex>
        <Text mx="1">{capitalize(name)}</Text>
        <Text mx="1" maxWidth="md" text-overflow="ellipsis">{capitalize(description)}</Text>
        <Spacer />
        <Box>
          <IconButton
            colorScheme="facebook"
            aria-label="Editar categoria"
            onClick={onEdit(id)}
            icon={<EditIcon />}
          />
          <IconButton
            colorScheme="red"
            aria-label="Eliminar categoria"
            onClick={onDelete(id)}
            icon={<DeleteIcon />}
            marginLeft="0.5"
          />
        </Box>
      </Flex>
    </ListItem>
  )
}

export default CategoryItem
