import React from 'react'
import { createRoot } from 'react-dom/client'
import Logo from '@/assets/images/logo.png'
import './index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render((
  <div>
    <p>Hello,This is pages changed</p>
    <img src={Logo} alt="" />
  </div>
))
