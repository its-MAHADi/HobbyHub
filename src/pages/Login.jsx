import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <div className='flex justify-center py-3 min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className='text-center font-semibold text-2xl '>Login Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
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
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
         <button className='btn btn-outline btn-primary mt-2'> <FcGoogle size={24} /> Login with Google</button>
           <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to="/auth/register" className='text-red-400' >Register</Link></p>
      </div>
      
    </div>
    </div>
  )
}

export default Login
