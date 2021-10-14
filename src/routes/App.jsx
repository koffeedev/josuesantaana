import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

import { routes } from './routes'
import Home from '../views/Home'
import NuevoIngreso from '../views/NuevoIngreso'
import Contacto from '../views/Contacto'
import Layout from '../views/Layout'
import { pageTitles } from '../utils/utils'

const App = () => {
  return (
    <BrowserRouter>
      <Redirect from='/' to={routes.HOME} />
      <Switch>
        <Route
          exact
          path={routes.HOME}
          render={() => (
            <Layout children={<Home />} activeItem={routes.HOME} pageTitle={pageTitles.HOME} />
          )}
        />
        <Route
          exact
          path={routes.ADMISSIONS}
          render={() => (
            <Layout
              children={<NuevoIngreso />}
              activeItem={routes.ADMISSIONS}
              pageTitle={pageTitles.ADMISSIONS}
            />
          )}
        />
        <Route
          exact
          path={routes.CONTACT}
          render={() => (
            <Layout
              children={<Contacto />}
              activeItem={routes.CONTACT}
              pageTitle={pageTitles.CONTACT}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
