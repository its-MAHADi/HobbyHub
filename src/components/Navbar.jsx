import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";
import { FaHome, FaUsers, FaPlusCircle, FaLayerGroup, FaTachometerAlt, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = React.useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((error) => toast.error(`Logout failed: ${error.message}`));
  };

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition ${
      isActive
        ? "bg-purple-700 text-white font-semibold"
        : "hover:bg-purple-500 hover:text-white"
    }`;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 to-purple-600 shadow-sm">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2 text-white">
        
        {/* Navbar Start */}
        <div className="flex items-center">
          {/* Mobile Hamburger */}
          <div className="lg:hidden mr-2">
            <button
              onClick={() => setOpen(true)}
              className="text-white text-2xl p-2 rounded-full hover:bg-purple-500 transition"
            >
              &#9776;
            </button>
          </div>

          <Link to="/" className="font-bold text-xl">HobbyHub</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink className={linkClasses} to="/"><FaHome /> Home</NavLink>
          <NavLink className={linkClasses} to="/all-groups"><FaUsers /> All Groups</NavLink>
          <NavLink className={linkClasses} to="/create-group"><FaPlusCircle /> Create Group</NavLink>
          <NavLink className={linkClasses} to="/my-groups"><FaLayerGroup /> My Groups</NavLink>
          <NavLink className={linkClasses} to="/dashboard"><FaTachometerAlt /> Dashboard</NavLink>
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div className="relative group">
            <img
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-white"
              src={user?.photoURL || userIcon}
              alt="User"
            />
            {user && (
              <div className="absolute bg-black text-white text-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 shadow-xl text-center w-max -translate-x-1/2 left-1/2">
                <p className="mb-2 font-semibold">{user.displayName || "User"}</p>
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 hover:bg-red-600 text-xs text-white px-3 py-1 rounded-md cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          {user && <ThemeToggle />}

          {/* Login/Logout Button */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-outline text-white btn-accent border-2 border-white hidden"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-outline btn-accent text-white border-2 border-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Sidebar with Slide Animation */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-500 to-pink-600 shadow-lg z-50 p-4 flex flex-col transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* X Button */}
        <button
          onClick={() => setOpen(false)}
          className="self-end bg-white text-purple-700 p-2 rounded-full mb-4 shadow hover:bg-gray-200 transition"
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <NavLink className={linkClasses} to="/"><FaHome /> Home</NavLink>
        <NavLink className={linkClasses} to="/all-groups"><FaUsers /> All Groups</NavLink>
        <NavLink className={linkClasses} to="/create-group"><FaPlusCircle /> Create Group</NavLink>
        <NavLink className={linkClasses} to="/my-groups"><FaLayerGroup /> My Groups</NavLink>
        <NavLink className={linkClasses} to="/dashboard"><FaTachometerAlt /> Dashboard</NavLink>

        {/* Auth Buttons */}
        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-red-500 hover:bg-red-600 text-xs text-white px-3 py-2 rounded-md mt-4"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/register"
            className="bg-green-500 text-xs text-white px-3 py-2 rounded-md mt-4"
          >
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
