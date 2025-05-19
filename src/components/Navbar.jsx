import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/all-groups">All Groups</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/create-group">Create Group</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/my-groups">My Groups</NavLink>
            </li>
           
          </ul>
        </div>
        <Link to="/" className="font-bold text-xl"> HobbyHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center  gap-6">
          <NavLink className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/">Home</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/all-groups">All Groups</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/create-group">Create Group</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-indigo-600" : "")} to="/my-groups">My Groups</NavLink>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
