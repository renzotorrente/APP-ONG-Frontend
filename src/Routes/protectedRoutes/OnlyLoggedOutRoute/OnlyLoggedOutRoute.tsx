import React from 'react'
import { VerifyAuth } from '../../../Slices/VerifyAuth'
import BaseProtectedRoute from '../BaseProtectedRoute'

const OnlyLoggedOutRoute: React.FC<any> = ({children, ...rest}) => {
  const auth = VerifyAuth();
  const isNotLogged = !auth.logged
  
  return (
    <BaseProtectedRoute {...rest} renderCondition={isNotLogged} pathToRedirect={'/'}>
    {children}
    </BaseProtectedRoute>
  )
}

export default OnlyLoggedOutRoute