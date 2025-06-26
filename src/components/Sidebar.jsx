import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from'../assets/user.png'
import { FaHome, FaPlusCircle, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Sidebar = () => {
     const {user, logOut} = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
   const handleLogOut=()=>{
    logOut().then(() => {
      toast.success('Logged out successfully!');
    }).catch((error) => {
      toast.error(`Logout failed: ${error.message}`);
    });
    }

  return (
    <div className="bg-green-300 col-span-3 h-[calc(100vh-40px)] px-4 py-2 relative">
          <Link to="/" className="font-bold text-xl hidden sm:block ">HobbyHub</Link>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex justify-between items-center">
        <div
          role="button"
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
      </div>
          
      {/* Full screen dropdown sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-[calc(100vh-40px)] bg-gradient-to-r from-blue-500 to-pink-600 z-50 p-8 mt-5 flex flex-col gap-4 text-white transition-all duration-300">
          <button
            className="self-end text-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'border-b-2 text-white' : '')}
            to="/"
          >
            Home
          </NavLink>
           <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/all-groups">All Groups</NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'border-b-2 text-white' : '')}
            to="/create-group"
          >
            Create Group
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'border-b-2 text-white' : '')}
            to="/my-groups"
          >
            My Groups
          </NavLink>
           <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/dashboard">Dashboard</NavLink>
            <button
              onClick={handleLogOut}
              className="w-full py-1 text-xl bg-red-500 hover:bg-red-600 text-white px-3  rounded cursor-pointer" > 
              Logout
            </button>
        </div>
        
      )}
      <div>
        <div className='mt-4 px-2 hidden sm:block'>
            <img  className="w-24 h-24 rounded-full cursor-pointer border-2 border-white" src={user?.photoURL || userIcon} alt="User" />
        </div>
        <p className='text-xl font-semibold mt-2 hidden sm:block'> {user && user.displayName}  </p>
      </div>

       <div className="py-4 hidden sm:block">
      <ul className="space-y-5 text-xl font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }`
            }
          >
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }`
            }
          >
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-group"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }`
            }
          >
            <FaPlusCircle /> Create Group
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-groups"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }`
            }
          >
            <FaUsers /> My Groups
          </NavLink>
        </li>
         <button
              onClick={handleLogOut}
              className="w-full py-1 text-xl bg-red-500 hover:bg-red-600 text-white px-3  rounded cursor-pointer" > 
              Logout
            </button>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
