import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

import { routes } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Redirect from='/' to='/inicio' />
      <Switch></Switch>
    </BrowserRouter>
  )
}

export default App
