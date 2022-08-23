import React from 'react'
import { Layout } from 'antd'
import logo from '@/assets/images/logo.png'
import styles from './index.scss'

const { Header: AHeader } = Layout

export default function Header() {
  return (
    <AHeader className={styles.header}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
      </div>
    </AHeader>
  )
}
