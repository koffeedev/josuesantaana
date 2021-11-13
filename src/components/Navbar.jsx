import React, { useState, useEffect } from 'react'
import { Menu, Row, Col, Typography, Image } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'

import { routes } from '../routes/routes'
import { schoolLogo } from '../utils/utils'
import { styles } from '../utils/styles'

const Navbar = ({ selectedKey }) => {
  const [active, setActive] = useState(routes.HOME)

  const handleActive = (key) => {
    setActive(key)
  }

  useEffect(() => {
    setActive(selectedKey)
  }, [selectedKey])

  return (
    <Row>
      <Col xl={1} lg={2} md={3} sm={4} xs={4} style={styles.navCol}>
        <Link to={routes.HOME}>
          <Image src={schoolLogo} height={64} preview={false} />
        </Link>
      </Col>
      <Col xl={11} lg={10} md={9} sm={16} xs={16} style={styles.navCol}>
        <Typography.Title level={3} style={styles.title}>
          <Link to={routes.HOME} style={styles.title}>
            Colegio Josué
          </Link>
        </Typography.Title>
      </Col>
      <Col xl={12} lg={12} md={12} sm={4} xs={4}>
        <Menu
          theme='dark'
          mode='horizontal'
          onClick={() => handleActive(selectedKey)}
          selectedKeys={active}
          style={styles.justifyEnd}
        >
          <Menu.Item key={routes.HOME} icon={<HomeOutlined />}>
            <Link to={routes.HOME}>Inicio</Link>
          </Menu.Item>
          <Menu.Item key={routes.ADMISSIONS} icon={<UserOutlined />}>
            <Link to={routes.ADMISSIONS}>Admisiones</Link>
          </Menu.Item>
          <Menu.Item key={routes.CONTACT} icon={<MailOutlined />}>
            <Link to={routes.CONTACT}>Contacto</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  )
}

export default Navbar
