import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import logo from '@/assets/images/logo.png'
import styles from './index.scss'

const { Header: AntdHeader } = Layout

export default function Header() {
  const [current, setCurrent] = useState('home')
  const navigate = useNavigate()

  const items: MenuProps['items'] = [
    { key: '', label: '首页' },
    { key: 'course', label: '课程' },
    { key: 'material', label: '素材' },
  ]

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key)
    navigate(`/${e.key}`)
  }

  return (
    <AntdHeader className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src={logo} className={styles.logo} />
          <h2 className={styles.logoText}>HowToPr</h2>
        </div>
        <Menu
          className={styles.menu}
          mode="horizontal"
          items={items}
          selectedKeys={[current]}
          onClick={onClick}
        />
      </div>
    </AntdHeader>
  )
}
