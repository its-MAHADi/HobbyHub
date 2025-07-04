import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router'

const Featured = ({ hobbysCards}) => {
  return (
    <div className='my-5'>
        <h1 className='text-4xl font-bold text-blue-700 mb-6 text-center'>Featured Groups</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           <Fade direction="up" cascade triggerOnce={true} duration={600}>

              {
        hobbysCards.map((hobbyCard)=>(
            <div key={hobbyCard._id} className="card bg-base-100 shadow-sm">
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
      <Link to={`/group-details/${hobbyCard._id}`} className="btn btn-primary">Details</Link>
    </div>
  </div>
</div>
        ))
      }

           </Fade>
        </div>
    </div>
  )
}

export default Featured
