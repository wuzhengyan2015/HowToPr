import React from 'react'
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div><Link to="/course">Course</Link></div>
      <div><Outlet /></div>
    </div>
  )
}
