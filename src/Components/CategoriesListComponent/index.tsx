import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, IconButton, List, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import CategoriesListHeader from './CategoriesListHeader';
import CategoryItem from './CategoryItem';
import { CategoriesListProps } from './types';


const CategoriesList = ({categories, onDelete, onEdit}:CategoriesListProps):JSX.Element => {
  return(
    <Container maxW="container.xl">
      <List>
        <CategoriesListHeader />
        {
          categories.map((cat) => 
            <CategoryItem key={cat.id} category={cat} onDelete={onDelete} onEdit={onEdit}/>
          )
        }
      </List>
    </Container>
  )
}

export default CategoriesList;