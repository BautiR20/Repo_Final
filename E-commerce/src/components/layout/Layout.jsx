import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../../styles/general.css"
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
import Head from '../pages/Head'

function Layout() {
  return (
    <>
      <Head />
      
      <Navbar />

      <main>
        <Outlet />
        
      </main>

      <Footer />
      
    </>
  )
}

export default Layout
