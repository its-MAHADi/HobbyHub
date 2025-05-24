import React from 'react';
import { Fade } from 'react-awesome-reveal';
import toast from 'react-hot-toast';

const GrpDetails = ({ group }) => {
  console.log(group);

  const groupStartDate = new Date(group.startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const isExpired = groupStartDate < today;

  const handleJoin = () => {
    if (isExpired) {
      toast.error('This group is no longer active.');
    } else {
      toast.success('Successfully joined the group!');
    }
  };

  return (
    <Fade  direction="left" ascade triggerOnce={true} duration={1000}>
      <div className="card lg:card-side bg-base-100 shadow-sm py-2 px-3 mt-20 border">
        <figure>
          <img src={group.image} alt="Group" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{group.groupName}</h2>
          <h1 className='text-[15px] text-gray-500'>Group name: ({group.hobbyCategory})</h1>
          <p>{group.description}</p>
          <div className='space-y-1'>
            <p><span className='font-semibold'>Meeting Location:</span> {group.meetingLocation}</p>
            <p><span className='font-semibold'>Max Members:</span> {group.maxMembers}</p>
            <p><span className='font-semibold'>Start Date:</span> {group.startDate}</p>
          </div>

          <div className="card-actions justify-end">
            {isExpired ? (
              <button className="btn btn-disabled text-red-500 bg-red-100 border-none cursor-not-allowed">
                This group is no longer active
              </button>
            ) : (
              <button onClick={handleJoin} className="btn btn-primary">
                Join Group
              </button>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default GrpDetails;
