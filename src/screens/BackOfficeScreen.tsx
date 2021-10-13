import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import SideToolsBackOffice from '../components/BackOfficeComponents/SideToolsBackOffice'
import { useAppSelector } from '../store'

function BackOfficeScreen({ children }: { children: ReactNode }): JSX.Element {
  const { role } = useAppSelector(({ Auth }) => Auth)
  return (
    <Box display="flex" flexDir="row">
      {role === 'admin' && <SideToolsBackOffice />}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          width: '100%',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </Box>
  )
}
export default BackOfficeScreen
