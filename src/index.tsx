import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from '@/components/Page'
import Course from '@/pages/Course'
import Home from '@/pages/Home'
import Material from '@/pages/Material'
import './index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}>
        <Route index element={<Home />} />
        <Route path='course' element={<Course />} />
        <Route path='material' element={<Material />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
