import React from 'react'
import { Menu } from 'antd'

const Navbar = ({ selectedKey }) => {
  return (
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={selectedKey}>
      <Menu.Item key={1}>Inicio</Menu.Item>
      <Menu.Item key={2}>Admisiones</Menu.Item>
      <Menu.Item key={3}>Contacto</Menu.Item>
    </Menu>
  )
}

export default Navbar
