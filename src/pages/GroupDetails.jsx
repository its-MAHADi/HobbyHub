import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import GrpDetails from '../components/GrpDetails'
import { useLoaderData, useParams } from 'react-router'

const GroupDetails = () => {
    const groupDetails = useLoaderData();
    const {id} = useParams();
    const [group , setGroup] = useState({});
    // console.log(groupDetails,id, group)
  
    useEffect(()=>{
      const hobbyDetails=groupDetails.find((singleGroup)=>singleGroup._id ==id);
      setGroup(hobbyDetails)
    },[groupDetails ,id])

  return (
    <div>
     <header>
        <Navbar></Navbar>
     </header>
      <main className='w-11/12 mx-auto'>
       <GrpDetails group={group}></GrpDetails>
      </main>
    </div>
  )
}

export default GroupDetails
