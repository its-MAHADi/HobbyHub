import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const CreateGroup = () => {

 const {user} = use(AuthContext);
 console.log(user)

  const handleCreateGroup = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newHobbydata = Object.fromEntries(formData.entries())
    console.log(newHobbydata)

    //send hobbyData to the database
    fetch('http://localhost:3000/hobbys',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(newHobbydata)
    })
    .then(res => res.json())
    .then(data => {
        console.log('after adding hobby to db',data)
    })
 }


  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create a New Hobby Group
        </h2>
        <form onSubmit={handleCreateGroup} className="space-y-4">
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            className="input input-bordered w-full"
           
            required
          />

          <select
            name="hobbyCategory"
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
            placeholder="Description"
            className="textarea textarea-bordered w-full"
         
            required
          ></textarea>

          <input
            type="text"
            name="meetingLocation"
            placeholder="Meeting Location"
            className="input input-bordered w-full"
           
            required
          />

          <input
            type="number"
            name="maxMembers"
            placeholder="Max Members"
            className="input input-bordered w-full"
          
            required
          />

          <input
            type="date"
            name="startDate"
            className="input input-bordered w-full"
           
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
           
            required
          />

          <input
            type="text"
            name="userName"
            value={user?.displayName}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
          <input
            type="email"
            name="email"
            value={user?.email}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />

          <button type="submit" className="btn btn-primary w-full">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
