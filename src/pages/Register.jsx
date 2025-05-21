import React, { use, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'

const Register = () => {
    const { createUser, setUser}=use(AuthContext)
      const [showPassword,setShowPassword] = useState(false)
      const [nameError,setNameError] = useState("")
       const navigate = useNavigate();

      const handleRegister = (e)=>{
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name =form.name.value;
        const email =form.email.value;
        const photo =form.photo.value;
        const password =form.password.value;
        console.log({name,email,photo,password})

        //   password validation
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;
        if (!hasUpperCase) {
            // toast.error("Password must contain at least one uppercase letter.");
            setNameError("Password must contain at least one uppercase letter.")
            return;
          }else{
            setNameError("")
          }
          if (!hasLowerCase) {
            // toast.error("Password must contain at least one lowercase letter.");
            setNameError("Password must contain at least one lowercase letter.")
            return;
          }else{
            setNameError("")
          }
          if (!isLongEnough) {
            // toast.error("Password must be at least 6 characters long.");
            setNameError("Password must be at least 6 characters long")
            return;
          }else{
            setNameError("")
          }

        createUser(email,password,name,photo)
        .then(result=>{
            const user = result.user;
            // console.log(user)
             setUser(user);
            Swal.fire({
              position: "top-bottom",
              icon: "success",
              title: "Registration successful!",
              showConfirmButton: false,
              timer: 1500
               });
                navigate("/");
        })
         .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
           toast.error(`Registration failed: ${errorMessage}`);
    // ..
  });

      }

      
  return (
    <div className='flex justify-center py-3 min-h-screen items-center'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
              <h2 className='text-center font-semibold text-2xl '>Register Your Account</h2>

         <form onSubmit={handleRegister} className="card-body">
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
          {
            nameError && <p className='text-xs text-error'>{nameError}</p>
          }

             <button type='submit' className="btn btn-neutral mt-4">Register</button>
           </fieldset>
               <p className='font-semibold text-center pt-3'> Allready Have An Account ? <Link to="/auth/login" className='text-red-400' >Login</Link></p>
         </form>
         
       </div>
       </div>
  )
}

export default Register
