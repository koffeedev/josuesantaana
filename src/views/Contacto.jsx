import React from 'react'
import { Form, Button, Checkbox, Row, Col, Typography } from 'antd'

import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { styles } from '../utils/styles'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const Contacto = () => {
  return (
    <div style={styles.sectionVh}>
      <Row justify='center' align='center'>
        <Col span={8}>
          <Typography.Title style={styles.textSectionTitle}>
            Formulario de Contacto
          </Typography.Title>
        </Col>
      </Row>
      <Row justify='center' align='center' style={styles.section}>
        <Col span={10}>
          <Form {...layout}>
            <Input label='Nombre' placeholder='Ingresa tu nombre' />
            <Input label='Correo' placeholder='Ingresa tu correo' type='email' />
            <TextArea label='Mensaje' placeholder='Deja aquí tu mensaje' />
            <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Deseo recibir las últimas novedades</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type='primary' htmlType='submit'>
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Contacto
