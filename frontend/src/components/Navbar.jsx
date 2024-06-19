import React, { useEffect, useState } from 'react'
import { FaSearchPlus,FaRegUserCircle,FaPlusCircle } from "react-icons/fa";
import {deleteCookie} from 'cookies-next'
import { Link } from 'react-router-dom';
import logo from '../assets/blogging.png';
import { toast,ToastContainer } from 'react-toastify';
// import {Cookie} from 'js-cookie'

import Cookie from 'js-cookie'

function Navbar() {
   
  const [auth,setAuth] = useState(false)
  // console.log(import.meta.env.VITE_BACKEND_API)
  const checkLogin=  () =>{
    
    fetch(`${import.meta.env.VITE_BACKEND_API}/auth/checkLogin`,{
     method:"GET",
     headers:{
         'Content-Type': 'application/json',
     },
     credentials: 'include'
    })
    .then((res)=>{ return  res.json()})
    .then((response)=>{
     console.log(response);
     console.log(auth);
      if(response.ok){
        
        setAuth(true);
      }
      else{
        setAuth(false);
      }
      console.log(auth);
    }).catch((err)=>{
      toast(err.message, {
        type: 'error',
        position: 'top-right',
        autoClose: 2000
    });
  })
  

 }
useEffect(()=>{
  checkLogin()
  
  

},[])

const handleLogout = async ()=>{
  await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/logout`,{
  method:"GET",
  headers:{
      'Content-Type': 'application/json',
  },
  credentials: 'include'
 }).then((res)=> {return res.json()})
 .then((response)=>{
 
   if(response.ok){
    
    toast(response.message, {
      type: 'success',
      position: 'top-right',
      autoClose: 2000
  }) 
    
   }
   else{
    toast(response.error, {
      type: 'error',
      position: 'top-right',
      autoClose: 2000
  });
   }
   console.log(auth);
 }).catch((err)=>{
   toast(err.message, {
     type: 'error',
     position: 'top-right',
     autoClose: 2000
 })})
 
  window.location.href = '/auth/signin';
}
    return (
    <>
    <nav className='navbar flex justify-between bg-slate-700 px-2 py-1 items-center'>
      <div className="left-side flex  w-28 justify-between ">
     <Link to='/profile'><FaRegUserCircle className='icon h-full object-fit w-6 text-white' ></FaRegUserCircle></Link>
     <Link to='/add'><FaPlusCircle className='icon h-full w-6 text-white'></FaPlusCircle></Link>
     <Link to='/search'><FaSearchPlus className='icon h-full w-6 text-white'></FaSearchPlus></Link>
    
      </div>
      <div className="mid-side">
      <Link to='/'><img src={logo} alt="" className='size-14'/></Link>
      </div>

      <div className="right-side flex text-white space-x-2 h-full">
        <Link to='/' className='align-middle'>
          Home
        </Link>
        <Link to='/about' className='items-center' >
          About
        </Link>
        <Link to='/contact' className='items-center'>
          Contact
        </Link>
        {
          auth ?
          <button className='items-center' onClick={handleLogout}>
            Logout
            </button>
        
         :
          <div className='flex justify-between w-24'>
          <Link to='/auth/signup' className='items-center' >
          <button> Signup</button> 
          </Link>
          <Link to='/auth/signin' className='items-center' >
          <button> Login</button> 
          </Link>
          </div>
}
        

      </div>
     <ToastContainer></ToastContainer>
    </nav>
    </>
  )
}

export default Navbar