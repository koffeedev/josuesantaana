import React, { useState } from 'react'
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

  return (
    <Row>
      <Col xl={1} lg={1} md={1} sm={1} xs={1} style={styles.centerVertical}>
        <Link to={routes.HOME}>
          <Image src={schoolLogo} height={55} preview={false} />
        </Link>
      </Col>
      <Col xl={11} lg={11} md={11} sm={19} xs={19} style={styles.centerVertical}>
        <Typography.Title level={2}>
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
          defaultSelectedKeys={active}
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
