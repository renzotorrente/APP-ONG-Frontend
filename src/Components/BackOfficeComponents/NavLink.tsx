import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link } from '@chakra-ui/layout'
import React, { ReactChild } from 'react'

const NavLink = ({ children }: { children: ReactChild }): JSX.Element => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/'}
  >
    {children}
  </Link>
)

export default NavLink
