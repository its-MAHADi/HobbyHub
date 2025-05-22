import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayouts = () => {
  return (
    <div className='max-w-7xl mx-auto bg-green-100'>
     <Navbar></Navbar>
      <div className='min-h-[calc(100vh-445px)]  mx-auto '>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayouts
