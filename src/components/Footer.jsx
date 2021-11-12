import React, { useMemo } from 'react'
import { Layout, Row, Col, Divider } from 'antd'

const Footer = () => {
  const date = useMemo(() => {
    const getDate = () => new Date().getFullYear()
    const year = getDate()
    return year
  }, [])

  return (
    <>
      <Row justify='center'>
        <Col span={16}>
          <Divider plain />
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Layout.Footer>Copyright &copy; Josu&eacute; Santa Ana {date}</Layout.Footer>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(Footer)
