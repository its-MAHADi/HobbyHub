import React from 'react'

const Featured = ({ hobbysCards}) => {
  return (
    <div className='my-5'>
        <h1 className='text-3xl font-bold text-center py-5'>Featured Groups</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
        hobbysCards.map((hobbyCard)=>(
            <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={hobbyCard.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{hobbyCard.groupName}</h2>
    <p className='text-xl text-blue-500 font-semibold'>{hobbyCard.hobbyCategory}</p>
     <div className='space-y-1'>
        <p> <span className='font-semibold'>Meeting Location :</span> {hobbyCard.meetingLocation}</p>
        <p><span className='font-semibold'>Max Members :</span> {hobbyCard.maxMembers}</p>
        <p> <span className='font-semibold'>Start Date :</span> {hobbyCard.startDate}</p>
     </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        ))
      }
        </div>
    </div>
  )
}

export default Featured
