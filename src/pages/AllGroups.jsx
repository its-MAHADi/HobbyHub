import React  from 'react'
import { useLoaderData } from 'react-router'
import Allgrp from '../components/Allgrp';
import { Fade } from 'react-awesome-reveal';

const AllGroups = () => {
    const allData = useLoaderData();
    // console.log(allData)
  return (
    <div >
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3 px-1'>
        {
            allData.map(singleGroup => <Allgrp key={singleGroup._id} singleGroup={singleGroup}></Allgrp>)
        }
       </div>
    </div>
  )
}

export default AllGroups
