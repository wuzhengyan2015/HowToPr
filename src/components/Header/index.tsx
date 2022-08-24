import React from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import logo from '@/assets/images/logo.png'
import styles from './index.scss'

const { Header: AHeader } = Layout

export default function Header() {
  const items: MenuProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'course', label: '课程' },
    { key: 'material', label: '素材' },
  ]
  return (
    <AHeader className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src={logo} className={styles.logo} />
          <h2 className={styles.logoText}>HowToPr</h2>
        </div>
        <Menu
          className={styles.menu}
          mode="horizontal"
          items={items}
          selectedKeys={['home']}
        />
      </div>
    </AHeader>
  )
}
