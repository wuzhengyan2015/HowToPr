import React from 'react'
import ReactDom from 'react-dom'
import Logo from '@/assets/images/logo.png'
import './index.scss'

ReactDom.render((
  <div>
    <p>Hello,This is pages changed</p>
    <img src={Logo} alt="" />
  </div>
), document.getElementById('root'))
