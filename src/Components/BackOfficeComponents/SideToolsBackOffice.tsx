import { Box, Flex, Link, Icon } from '@chakra-ui/react'
import {
  SettingsIcon,
  EditIcon,
  ChatIcon,
  AtSignIcon,
  PhoneIcon,
} from '@chakra-ui/icons'
import { item } from './Types'
import React from 'react'
import { useHistory } from 'react-router'
import { CalendarIcon } from '@chakra-ui/icons'
import classes from '../NavBar/styles/animation.module.css'
function SideToolsBackOffice(): JSX.Element {
  const history = useHistory()
  const items: item[] = [
    {
      name: 'Editar Inicio',
      action: '/backoffice/home-edit',
      icon: EditIcon,
    },
    {
      name: 'Crear novedades',
      action: '/backoffice/news/create',
      icon: EditIcon,
    },
    {
      name: 'Actividades',
      action: '/backoffice/activities',
      icon: CalendarIcon,
    },
    {
      name: 'Crear Actividad',
      action: '/backoffice/activities/create',
      icon: EditIcon,
    },
    {
      name: 'Novedades',
      action: '/backoffice/news',
      icon: CalendarIcon,
    },
    {
      name: 'Crear Categoria',
      action: '/backoffice/categories/create',
      icon: EditIcon,
    },
    {
      name: 'Categoria',
      action: '/backoffice/categories',
      icon: CalendarIcon,
    },
    { name: 'Usuarios', action: '/backoffice/users', icon: AtSignIcon },
    {
      name: 'Mi organización',
      action: '/backoffice/edit-organization',
      icon: SettingsIcon,
    },
    { name: 'Contactos', action: '/backoffice/contacts', icon: PhoneIcon },
    { name: 'Testimonios', action: '/backoffice/testimonials', icon: ChatIcon },
  ]
  return (
    <>
      <Box
        minH="100vh"
        bg="#0D1821"
        className={classes.animationEntrance}
        position="absolute"
        h="100%"
        zIndex={1}
      >
        <Flex flexDirection="column" minH="500px" justifyContent="space-around">
          {items.map((elem) => (
            <Link
              key={elem.name}
              w="100%"
              p="10px 20px"
              fontSize={{ base: '12px', md: '14px', lg: '15px' }}
              textDecoration="none"
              color="white"
              _hover={{ textDecoration: 'none', background: '#081C2B' }}
              onClick={() => {
                history.push(elem.action)
              }}
            >
              <Icon as={elem.icon} w={4} h={4} pr="5px" />
              {elem.name}
            </Link>
          ))}
        </Flex>
      </Box>
    </>
  )
}

export default SideToolsBackOffice
