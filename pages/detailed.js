import React from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'
import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Toctfy from '../components/tocify.tsx'

import servicePath from '../config/apiUrl'


const Detailed = props => {
  const tocify = new Toctfy()
  const renderer = new marked.Renderer()

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false, // 是否忽略html标签
    tables: true, // 前置需要gfm为true
    breaks: true, // 前置需要gfm为true
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.articleContent)

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={14} lx={12}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">视频列表</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>xxxxxxxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">React视频实战教程</div>
            <div className="list-icon center">
              <span>
                <Icon type="calendar" />
                2019-11-1
              </span>
              <span>
                <Icon type="folder" />
                视频教程
              </span>
              <span>
                <Icon type="fire" />
                5498人
              </span>
            </div>
            <div
              className="detailed-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={4} lx={3}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nac comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async context => {
  console.log(context.query.id)
  let id = context.query.id

  const promise = new Promise(reslove => {
    axios(servicePath.getArticleById + id)
      .then(res => {
        console.log(res.data)
        reslove(res.data.data[0])
      })
      .catch(err => {
        console.log(err)
      })
  })

  return await promise
}

export default Detailed
