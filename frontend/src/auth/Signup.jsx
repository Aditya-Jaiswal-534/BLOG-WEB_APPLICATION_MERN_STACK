import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'


function Signup() {
  const [formData, setFormData] = useState({name:"",email:"",password:"",confirmPassword:""});
  const [errors,setErrors] = useState({name:"",email:"",password:"",confirmPassword:""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = async (e) => { 
        
  e.preventDefault();
  setErrors({});
  let count = 0;
  const validationErrors  = {name: "", email:"",password: "", confirmPassword:""};
  if (!formData.email) {
      validationErrors.email = 'Email is required';
      count++;
  }
  if (!formData.password) {
      validationErrors.password = 'Password is required';
      count++;
  }
  if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
      count++;
    }
   
  if (count > 0) {
      setErrors(validationErrors);
      return;
  }
  
  fetch(`${import.meta.env.VITE_BACKEND_API}/auth/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
.then((res) => {
    
    return res.json();
})
.then((response) => {
    
    if (response.ok) {
        toast(response.message, {
            type: 'success',
            position: 'top-right',
            autoClose: 2000
        })
        setFormData(
            {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        )
    } else {
        toast(response.error, {
            type: 'error',
            position: 'top-right',
            autoClose: 2000
        });
        // alert(response.error);
    }
})
.catch((error) => {
    toast(error.message, {
        type: 'error',
        position: 'top-right',
        autoClose: 2000
    });
})
}

return(
    <>
    <Navbar></Navbar>
    <div className="authout flex w-[full] bg-violet-400 h-[670px] p-4 items-center justify-center">
        <div className="authin flex">
            <div className="left-side bg-blue-500 w-72 h-80 mr-2">

            </div>
            <div className="right-side flex flex-col items-stretch">
                <form action="" className='flex flex-col justify-between items-center h-80 ' onSubmit={handleSubmit}>
                 <div className="forminputcont">
                    <label htmlFor="name">name</label>
                    <input type="text" id='name' placeholder='enter your username here' name="name" value ={formData.name} onChange={handleChange}/>
                    {errors.name && <span className="formerror">{errors.name}</span>}
                 </div>
                 <div className="forminputcont">
                    <label htmlFor="email">email</label>
                    <input type="text" id='email' placeholder='enter your username here' name="email" value ={formData.email} onChange={handleChange}/>
                    {errors.email && <span className="formerror">{errors.email}</span>}
                 </div>
                 <div className="forminputcont">
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' placeholder='enter your password  here' name="password" value ={formData.password} onChange={handleChange}/>
                    {errors.password && (
                                <span className="formerror">{errors.password}</span>
                            )}
                 </div>
                 <div className="forminputcont">
                    <label htmlFor="confirmation">Confirm Password</label>
                    <input type="text" id='confirmation' placeholder='please confirm your password' name="confirmPassword" value ={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && (
                                <span className="formerror">{errors.confirmPassword}</span>
                            )}
                 </div>
                 <button type='submit'> Submit</button>
                 <p className='inline-block '>Already have an account?  </p><Link to='/auth/signin'> <u>Login</u></Link>

                </form>
                
            </div>
        </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default Signup