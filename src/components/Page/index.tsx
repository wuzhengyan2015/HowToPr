import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './index.scss'

const { Content } = Layout

export default function Page() {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}
