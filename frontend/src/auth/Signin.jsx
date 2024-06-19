import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify';



function Signin() {
   const [errors,setErrors] = useState({email:"",password:""})
   const [data,setData] = useState({email:"",password:""})
   const handleChange = (e) => {
    const {name,value} = e.target;
    setData(
      {
        ...data,
        [name]:value
      }
    )
   }


   const handleSubmit = async (e) =>{
    e.preventDefault();
    setErrors({});
    let count =0;
    const validationErrors = {email:"",password:""};
    if(!data.email){
      validationErrors.email = "email is required";
      count++;
    }
    if(!data.password){
      validationErrors.password = "password  is required";
      count++;
    }
    if(count>0){
      setErrors(validationErrors);
      return;
    }

    fetch(`${import.meta.env.VITE_BACKEND_API}/auth/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials:'include',
  })
  .then((res) => {
      
      return res.json();
  })
  .then((response) => {
      
      if (response.ok) {
        
        toast(response.message , {
          type: 'success',
          position: 'top-right',
          autoClose: 2000
      });
      window.location.href="/";
      
          setData(
              {
               
                  email: '',
                  password: '',
              
              }
          )
      } else {
        // alert(response.error);
          toast(response.error, {
              type: 'error',
              position: 'top-right',
              autoClose: 2000
          });
          
      }
  })
  .catch((error) => {
      toast(error.message, {
          type: 'error',
          position: 'top-right',
          autoClose: 2000
      });
  })


  const checkLogin= () =>{
    fetch(`${import.meta.env.VITE_BACKEND_API}/auth/checkLogin`,{
     method:"GET",
     headers:{
         'Content-Type': 'application/json',
     },
     credentials: 'include'
    }).then((res)=>{return res.json()})
 }

   }
  return (
    <>
    <Navbar></Navbar>
    <div className="authout flex w-[full] bg-violet-400 h-[670px] p-4 items-center justify-center">
        <div className="authin flex">
            <div className="left-side bg-blue-500 w-72 h-80 mr-2">

            </div>
            <div className="right-side flex flex-col items-stretch">
                <form action="" className='flex flex-col justify-between items-center h-80 ' onSubmit={handleSubmit}>
                 <div className="forminputcont">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='enter your email here'  name="email" onChange={handleChange}/>
                    {errors.email && <span className="form-error">{errors.email}</span>}
                 </div>
                 <div className="forminputcont">
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' placeholder='enter your password  here' name="password" onChange={handleChange}/>
                 </div>
                {errors.password && <span className="form-error">{errors.password}</span>}
                 <button type='submit'> Login</button>
                 <p className='inline-block '>Don't have an account? <Link to='/auth/signup'> <u>Signup</u></Link> </p>

                </form>
                
            </div>
        </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default Signin