import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import ONGLogo from './ONGLogo'
import HeaderNavItems from './HeaderNavItems'
import AuthButtons from './AuthButtons'
import {
  getOrganizationLogo,
  getNavItems,
} from '../../services/fakeOrganizationsService'
import classes from './styles/header.module.css'

export interface IHeader {
  handleOpenBackOffice: () => void
}

const Header = ({ handleOpenBackOffice }: IHeader): JSX.Element => {
  const logo = getOrganizationLogo().image
  const navItems = getNavItems()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="100%"
      p={2}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      className={classes.navbarNav}
    >
      <ONGLogo src={logo} name="Zonas Grises" />
      <HeaderNavItems items={navItems} isOpen={isOpen} />
      <AuthButtons
        handleOpenBackOffice={handleOpenBackOffice}
        handleToggle={handleToggle}
      />
    </Flex>
  )
}

export default Header
