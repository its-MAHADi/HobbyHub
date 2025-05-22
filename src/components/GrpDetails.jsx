import React from 'react'

const GrpDetails = ({group}) => {
    console.log(group)
  return (
    <div className='my-8'>
     <div className="card lg:card-side bg-base-100 shadow-sm py-3 px-3">
  <figure>
    <img
      src={group.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{group.groupName}</h2>
    <h1 className='text-[15px] text-gray-500'>Group name : ( {group.hobbyCategory} )</h1> 
    <p>{group.description}</p>
     <div className='space-y-1'>
        <p> <span className='font-semibold'>Meeting Location :</span> {group.meetingLocation}</p>
        <p><span className='font-semibold'>Max Members :</span> {group.maxMembers}</p>
        <p> <span className='font-semibold'>Start Date :</span> {group.startDate}</p>
     </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Join Group</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default GrpDetails
