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
