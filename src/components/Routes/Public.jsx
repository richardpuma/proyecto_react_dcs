import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Public = ({ component: Component, ...rest }) => {
  const userLogged = false
  if (userLogged) {
    return <Redirect to="/" />
  }

  return <Route {...rest} render={Component} />

}

export default Public;
