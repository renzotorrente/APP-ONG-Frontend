import React, { ReactNode, useState } from 'react'
import BackOfficeScreen from '../../screens/BackOfficeScreen'
import Header from '../HeaderComponent/IndexHeader'

const IndexNavBar = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenBackOffice = (): void => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <Header handleOpenBackOffice={handleOpenBackOffice} />
      <div
        style={{
          flexDirection: 'column',
        }}
      >
        {isOpen ? (
          <BackOfficeScreen>{children}</BackOfficeScreen>
        ) : (
          <>{children}</>
        )}
      </div>
    </>
  )
}

export default IndexNavBar
