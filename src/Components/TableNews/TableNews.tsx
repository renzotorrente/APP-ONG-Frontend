import { Table, Tbody, Thead, Tr, Th, Td, Button, Image } from '@chakra-ui/react';
import React from 'react';

import classes from './styles/TableNews.module.css';

import { NewType } from '../HomeNews/HomeNewsComponentType';
import { questionAlert } from '../../components/alertBox/index';
import { Link } from 'react-router-dom';

const formatDate = ( date:string ):string => {
    //transform yyyy-mm-ddT00:00:00.000Z to yyyy-mm-dd
    return date.slice(0, 10);
}



const TableNews = ({data, deleteNewMutation}: {data:NewType[], deleteNewMutation:unknown}):JSX.Element => {

  const showAlert = (newDelete: NewType) => {
    const data = {
      title: 'Eliminar novedad',
      text: `Estas seguro que deseas eliminar la novedad "${newDelete.name}" ?`
    }

    const callbacks = {
      async confirmed (){ 
        await deleteNewMutation.mutate(newDelete.id);
      },
      denied () {}
    }

    //create the alert
    questionAlert(data, callbacks);
  }

    return (
        <Table size="sm" colorScheme='black' my={5} >
        <Thead>
          <Tr>
            <Th textAlign='center' fontSize='1.2rem'>Imagen</Th>
            <Th textAlign='center' fontSize='1.2rem'>Nombre</Th>
            <Th className={classes['d-md-tablecell']} textAlign='center' fontSize='1.2rem'>Fecha Creación</Th>
            <Th textAlign='center' fontSize='1.2rem'>Acción</Th>
          </Tr>
        </Thead>
        <Tbody>
          { data.map( (element:NewType) => (
              <Tr key={element.id}>
                  <Td>
                    <Image
                        boxSize="80px"
                        objectFit="cover"
                        src={element.image}
                        alt={element.name}
                    />
                  </Td>
                  <Td textAlign='center'>{element.name}</Td>
                  <Td className={classes['d-md-tablecell']} textAlign='center'>{formatDate(element.createdAt)}</Td>
                  <Td textAlign='center'>
                    <Button colorScheme='blue' as={Link} to={`/backoffice/news/${element.id}`} me={3} my={2} textAlign='center'>Editar</Button>
                    <Button colorScheme='red' onClick={() => showAlert(element)}>Eliminar</Button>
                  </Td>
              </Tr>
          ))}  
         </Tbody> 
      </Table>
    )
}


export default TableNews;