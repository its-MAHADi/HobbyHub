import React, { use } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

const UpdateGroup = () => {
     const {user} = use(AuthContext);
    //  console.log(user)
     const navigate = useNavigate();

   const { _id, groupName,hobbyCategory,description,meetingLocation,maxMembers,startDate,image} = useLoaderData();
   const handleUpdateGroup = e =>{
    e.preventDefault();
    const form = e.target;
    const formData =new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());

    //send updated group to the db
    fetch(`https://hobby-hub-server-zeta.vercel.app/all-hobbys/${_id}`,{
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(updatedGroup)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
          Swal.fire({
          position: "top-bottom",
          icon: "success",
          title: "Group updated successfully!",
          showConfirmButton: false,
          timer: 1500
           });
            navigate("/my-groups");
        }
    })


   }


  return (
   <div>
     <div>
        <Navbar></Navbar>
     </div>
      <div className=" py-10 mt-12">
      <div className="max-w-3xl mx-auto p-6 border  rounded-lg shadow-md ">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Update Hobby Group
        </h2>
        <form onSubmit={handleUpdateGroup} className="space-y-4">
          <input
            type="text"
            name="groupName"
            defaultValue={groupName}
            placeholder="Group Name"
            className="input input-bordered w-full"
            required
          />

          <select
            name="hobbyCategory"
             defaultValue={hobbyCategory}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Hobby Category</option>
            <option value="Drawing & Painting">Drawing & Painting</option>
            <option value="Photography">Photography</option>
            <option value="Video Gaming">Video Gaming</option>
            <option value="Fishing">Fishing</option>
            <option value="Running">Running</option>
            <option value="Cooking">Cooking</option>
            <option value="Reading">Reading</option>
            <option value="Writing">Writing</option>
            <option value="Hiking">Hiking</option>
            <option value="DIY & Crafting">DIY & Crafting</option>
            <option value="Tech & Gadgets">Tech & Gadgets</option>
          </select>

          <textarea
            name="description"
             defaultValue={description}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>

          <input
            type="text"
            name="meetingLocation"
             defaultValue={meetingLocation}
            placeholder="Meeting Location"
            className="input input-bordered w-full"
            required
          />

          <input
            type="number"
            name="maxMembers"
             defaultValue={maxMembers}
            placeholder="Max Members"
            className="input input-bordered w-full"
            required
          />

          <input
            type="date"
            name="startDate"
             defaultValue={startDate}
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="image"
             defaultValue={image}
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="userName"
            value={user?.displayName}
            className="input input-bordered w-full bg-gray-100 text-black"
            readOnly
          />
          <input
            type="email"
            name="email"
            value={user?.email}
            className="input input-bordered w-full bg-gray-100 text-black"
            readOnly
          />

          <button type="submit" className="btn btn-primary w-full">
           Update group
          </button>
        </form>
      </div>
    </div>
   </div>
  )
}

export default UpdateGroup
