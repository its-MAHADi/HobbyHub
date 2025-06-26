import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'


const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 gap-5 p-5'>
        <Sidebar></Sidebar>
      <div className='col-span-9 bg-indigo-400'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
