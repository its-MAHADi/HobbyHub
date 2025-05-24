import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from"../assets/user.png"
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const handleLogOut=()=>{
    logOut().then(() => {
      toast.success('Logged out successfully!');
    }).catch((error) => {
      toast.error(`Logout failed: ${error.message}`);
    });
    }
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 p-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-r from-blue-500 to-pink-600  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/all-groups">All Groups</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/create-group">Create Group</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/my-groups">My Groups</NavLink>
            </li>
           
          </ul>
        </div>
        <Link to="/" className="font-bold text-xl"> HobbyHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center  gap-6">
          <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/">Home</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/all-groups">All Groups</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/create-group">Create Group</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/my-groups">My Groups</NavLink>
        </div>
      </div>
    
     <div className="navbar-end gap-3">
      {/* Avatar + Hover Tooltip */}
      <div className="relative group">
        <img
          className="w-12 h-12 rounded-full cursor-pointer border-2 border-white"
          src={user?.photoURL || userIcon}
          alt="User" />
       

        {/* Hover Box */}
        {user && (
          <div className="absolute  transform -translate-x-4/15
             bg-black text-white text-sm rounded-lg px-4 py-2 
             opacity-0 group-hover:opacity-100 transition-opacity duration-300
             whitespace-nowrap z-10 shadow-xl text-center w-max">
            <p className="mb-2 font-semibold">{user.displayName || "User"}</p>
            <button
              onClick={handleLogOut}
              className="bg-red-500 hover:bg-red-600 text-xs text-white px-3 py-1 rounded cursor-pointer" > 
              Logout
            </button>
          </div>
        )}
      </div>
        {/* Theme */}
      {
        user?  <ThemeToggle></ThemeToggle> : <button className="hidden"></button>
      }
          {/* Login/Logot */}
        {
         user ? <button onClick={handleLogOut} className='btn btn-outline text-white btn-accent border-2 border-white hidden  '>Logout</button> :   <Link to="/auth/login" className="btn btn-outline btn-accent text-white border-2 border-white">Login</Link>
        }

    </div>


    </div>
  );
};

export default Navbar;
