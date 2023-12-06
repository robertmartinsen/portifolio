import React from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
