import React from 'react'
import { Link } from 'react-router'

const Allgrp = ({singleGroup}) => {
  return (
    
        <div className='my-1 px-1'>
    
            <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={singleGroup.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{singleGroup.groupName}</h2>
    <p className='text-xl text-blue-500 font-semibold'>{singleGroup.hobbyCategory}</p>
     <div className='space-y-1'>
        <p> <span className='font-semibold'>Meeting Location :</span> {singleGroup.meetingLocation}</p>
        <p><span className='font-semibold'>Max Members :</span> {singleGroup.maxMembers}</p>
        <p> <span className='font-semibold'>Start Date :</span> {singleGroup.startDate}</p>
     </div>
    <div className="card-actions justify-end">
      <Link to={`/group-details/${singleGroup._id}`} className="btn btn-primary">See More</Link>
    </div>
  </div>
</div>
      
        </div>
  
  )
}

export default Allgrp
