import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Layout as Container } from 'antd'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const { Header, Content } = Container

const Layout = ({ pageTitle, children, activeItem }) => (
  <HelmetProvider>
    <Helmet>
      <title>{pageTitle}</title>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        content='Somos una Institución que responde al reto de la educación formativa integral en El Salvador, la cual debe incluir el cuerpo, el alma y el espíritu.'
      />
      <meta name='copyright' content='Josué Santa Ana' />
      <meta name='robots' content='index, follow' />
      <meta name='rating' content='general' />
    </Helmet>
    <Container>
      <Header>
        <Navbar selectedKey={activeItem} />
      </Header>
      <Content>{children}</Content>
      <Footer />
    </Container>
  </HelmetProvider>
)

export default Layout
