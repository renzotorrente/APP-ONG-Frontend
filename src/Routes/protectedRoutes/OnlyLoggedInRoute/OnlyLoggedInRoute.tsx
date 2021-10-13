import React from 'react'
import { VerifyAuth } from '../../../Slices/VerifyAuth'
import BaseProtectedRoute from '../BaseProtectedRoute'

const OnlyLoggedInRoute: React.FC<any> = ({children, ...rest}) => {
  const auth = VerifyAuth();
  const isLogged = auth.logged
  
  return (
    <BaseProtectedRoute {...rest} renderCondition={isLogged} pathToRedirect={'/login'}>
    {children}
    </BaseProtectedRoute>
  )
}

export default OnlyLoggedInRoute