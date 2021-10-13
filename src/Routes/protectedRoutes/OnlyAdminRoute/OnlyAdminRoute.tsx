import React from 'react'
import { VerifyAuth } from '../../../Slices/VerifyAuth'
import BaseProtectedRoute from '../BaseProtectedRoute'

const OnlyAdminRoute: React.FC<any> = ({children, ...rest}) => {
  const auth = VerifyAuth();
  const isAdmin = auth.role === "admin" && auth.logged;
  
  return (
    <BaseProtectedRoute {...rest} renderCondition={isAdmin} pathToRedirect={'/login'}>
    {children}
    </BaseProtectedRoute>
  )
}

export default OnlyAdminRoute
