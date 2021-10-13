import React, { ReactChild } from 'react'
import { Link, Stack, Text, Box } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { HeaderNavItemsProps, NavItem } from './types'
import classes from './styles/header.module.css'
interface IMenuItem {
  children: ReactChild
  isLast?: boolean
  to: string
}

const MenuItem = ({ children, to = '/' }: IMenuItem) => {
  const location = useLocation()
  return (
    <Link
      as={RouterLink}
      to={to}
      className={
        to == location.pathname ? classes.activeLink : classes.normalLink
      }
    >
      <Text display="block">{children}</Text>
    </Link>
  )
}

const HeaderNavItems = ({
  items,
  isOpen,
}: HeaderNavItemsProps): JSX.Element => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
      className={classes.animationEntrance}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {items.map((item: NavItem) => (
          <MenuItem to={item.path} key={item.path}>
            {item.text}
          </MenuItem>
        ))}
      </Stack>
    </Box>
  )
}

export default HeaderNavItems
