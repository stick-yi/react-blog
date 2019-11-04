import React from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'

const Detailed = () => (
  <div>
    <Head>
      <title>Detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={14} lx={12}>
        <div className="bread-div">
          <Breadcrumb>
            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
            <Breadcrumb.Item>xxxxxxxx</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          <div className="detailed-title">React视频实战教程</div>
          <div className="list-icon center">
            <span><Icon type="calendar" />2019-11-1</span>
            <span><Icon type="folder" />视频教程</span>
            <span><Icon type="fire" />5498人</span>
          </div>
          <div className="detailed-content">
            markdown内容
          </div>
        </div>
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} lx={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
    <Footer />
  </div>
)
export default Detailed
