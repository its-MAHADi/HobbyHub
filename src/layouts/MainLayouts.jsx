import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayouts = () => {
  return (
    <div>
     <Navbar></Navbar>
      <div className='min-h-[calc(100vh-445px)] max-w-7xl mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayouts
