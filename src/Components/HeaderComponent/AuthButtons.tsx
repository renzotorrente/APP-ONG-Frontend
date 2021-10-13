import React from 'react'
import {
  Stack,
  Button,
  Flex,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  loginRoute,
  registerRoute,
} from '../../services/fakeOrganizationsService'
import { useAppSelector } from '../../store'
import LogOutHook from '../../Slices/hooks/LogOutHook'
import classes from './styles/header.module.css'

interface IAuthButtons {
  handleOpenBackOffice: () => void
  handleToggle: () => void
}

const AuthButtons = ({
  handleOpenBackOffice,
  handleToggle,
}: IAuthButtons): JSX.Element => {
  const { role, logged } = useAppSelector(({ Auth }) => Auth)
  const { id } = useAppSelector(({ Auth }) => Auth)
  const { logOut } = LogOutHook()

  return (
    <Stack
      justify="space-evenly"
      wrap="wrap"
      direction={['row']}
      align="center"
    >
      <Button
        className={classes.hidden}
        marginRight="20px"
        colorScheme="green"
        onClick={handleToggle}
      >
        Menu
      </Button>
      {logged ? (
        <Flex alignItems={'center'}>
          {role === 'admin' && (
            <Button
              marginRight="20px"
              colorScheme="green"
              onClick={handleOpenBackOffice}
            >
              Backoffice
            </Button>
          )}
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar size={'sm'} />
            </MenuButton>
            <MenuList
              style={{
                color: 'black',
              }}
            >
              <MenuItem onClick={() => logOut()}>Cerra sesión</MenuItem>
              <MenuItem as={Link} to={`/backoffice/edit/users/${id}`}>
                Editar perfil
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <>
          <Button as={Link} to={loginRoute} colorScheme="blue">
            Log In
          </Button>
          <Button as={Link} to={registerRoute}>
            Registrate
          </Button>
        </>
      )}
    </Stack>
  )
}

export default AuthButtons
