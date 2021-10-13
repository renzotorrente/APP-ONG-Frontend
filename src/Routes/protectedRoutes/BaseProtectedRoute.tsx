import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const BaseProtectedRoute: React.FC<any> = ({ children, renderCondition, pathToRedirect, ...rest }) => {
  return (
    <Route {...rest}
      render={({ location }) =>
        renderCondition ?
          children
          :
          <Redirect to={{
            pathname: pathToRedirect,
            state: { from: location }
          }} />} />
  )
}

export default BaseProtectedRoute