import React from 'react'
import { Row, Col, Carousel, Typography, Image } from 'antd'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

import { styles } from '../utils/styles'

const Home = () => {
  return (
    <>
      <Row justify='center' gutter={[24, 16]} align='center'>
        <Col span={8} style={styles.centerVertical}>
          <Row justify='center' align='center' style={styles.textCenter}>
            <Col span={24}>
              <Typography.Title>Misión</Typography.Title>
            </Col>
            <Col span={24}>
              Entrenar una generación joven que sepa responder a los desafíos espirituales,
              gubernamentales, culturales e intelectuales que este mundo globalizado requiere.
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Player
            autoplay
            loop
            style={{ width: '80%', height: 'auto' }}
            src='https://assets7.lottiefiles.com/packages/lf20_jcyhxkau.json'
          >
            <Controls visible={false} />
          </Player>
        </Col>
      </Row>
      <Row justify='center' gutter={[24, 16]} align='center'>
        <Col span={8}>
          <Player
            autoplay
            loop
            style={{ width: '80%', height: 'auto' }}
            src='https://assets3.lottiefiles.com/datafiles/1QPWH9xjWBflXo1QBqsL0XszJILLRF2dMiZ7PBt3/Trophy-animation/trophy.json'
          >
            <Controls visible={false} />
          </Player>
        </Col>
        <Col span={8} style={styles.centerVertical}>
          <Row justify='center' align='center' style={styles.textCenter}>
            <Col span={24}>
              <Typography.Title>Visión</Typography.Title>
            </Col>
            <Col span={24}>
              Ser una Institución que responda al reto de la educación formativa integral en El
              Salvador, la cual debe incluir el cuerpo, el alma y el espíritu.
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Home
