import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router'

const Register = () => {
      const [showPassword,setShowPassword] = useState(false)
  return (
    <div className='flex justify-center py-3 min-h-screen items-center'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
              <h2 className='text-center font-semibold text-2xl '>Register Your Account</h2>
         <div className="card-body">
           <fieldset className="fieldset">
               
        {/* Name */}
      <label className="label">Name</label>
      <input name='name' type="text" className="input" placeholder="Name" required />

        {/* email */}
      <label className="label">Email</label>
      <input name='email' type="email" className="input" placeholder="Email" required />

        {/* photo url */}
      <label className="label">Photo URL</label>
      <input name='photo' type="text" className="input" placeholder="Photo URL" required />

      {/* password */}
      <div className='relative'>
        <label className="label">Password</label>
        <input name='password' type={showPassword ? 'text' : 'password'}
         className="input" 
         placeholder="Password" required />
        <button onClick={()=>{setShowPassword(!showPassword)}} className='absolute btn btn-xs mt-2 items-center right-6'> 
             {
                showPassword ? <FaEyeSlash /> : <FaEye /> 
             }    
              </button>
        </div>
             <button className="btn btn-neutral mt-4">Register</button>
           </fieldset>
               <p className='font-semibold text-center pt-3'> Allready Have An Account ? <Link to="/auth/login" className='text-red-400' >Login</Link></p>
         </div>
         
       </div>
       </div>
  )
}

export default Register
