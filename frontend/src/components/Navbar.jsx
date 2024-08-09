import React, { useEffect, useState } from 'react'
import { FaSearchPlus, FaRegUserCircle, FaPlusCircle } from "react-icons/fa";
import { deleteCookie } from 'cookies-next'
import { Link } from 'react-router-dom';
import logo from '../assets/blogging.png';
import { toast, ToastContainer } from 'react-toastify';
import Cookie from 'js-cookie'

function Navbar() {
  const buttonStyle = 'border-2 p-2 rounded-full hover:bg-gray-800 hover:border-gray-800 hover:text-white transition duration-300 ease-in-out';

  const [auth, setAuth] = useState(false);

  const checkLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/checkLogin`, {
        method: 'GET',
        headers: {
          'content': 'application/json'
        },
        credentials: 'include',
      }).then((res) => {
        return res.json()
      })
        .then((res) => {
          if (res.ok) {
            setAuth(true);
          }
        })
    }
    catch (err) {
      throw (err)
    }
  }

  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/logout`, {
      method: 'GET',
      headers: {
        'content': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.ok) {
          setAuth(false);
          window.location.href = '/auth/signin'
        }
      })
  }

  useEffect(() => {
    checkLogin();
  }, [auth])

  return (
    <>
      <nav className="navbar flex justify-between bg-gray-900 px-6 py-3 items-center shadow-md">
        
          {
            auth?
            <div className="left-side flex space-x-4">
            <Link to='/profile' className="hover:scale-110 transition-transform duration-200">
            <FaRegUserCircle className="icon h-7 w-7 text-gray-300 hover:text-gray-100" />
          </Link>
          <Link to='/add' className="hover:scale-110 transition-transform duration-200">
            <FaPlusCircle className="icon h-7 w-7 text-gray-300 hover:text-gray-100" />
          </Link>
          <Link to='/search' className="hover:scale-110 transition-transform duration-200">
            <FaSearchPlus className="icon h-7 w-7 text-gray-300 hover:text-gray-100" />
          </Link>
          </div>
          :
          <div className='text-white font-bold'>Please login to use the Blog app !</div>
          }
       
        <div className="mid-side flex flex-1 justify-center">
          <Link to='/' className="hover:scale-105 transition-transform duration-200">
            <img src={logo} alt="Blog Logo" className="h-10" />
          </Link>
        </div>
        <div className="right-side flex text-gray-300 space-x-6 items-center">
          <Link to='/' className="hover:text-white hover:underline transition duration-200">
            Home
          </Link>
          <Link to='/about' className="hover:text-white hover:underline transition duration-200">
            About
          </Link>
          <Link to='/contact' className="hover:text-white hover:underline transition duration-200">
            Contact
          </Link>
          {
            auth ?
              <button className="hover:text-white transition duration-200" onClick={handleLogout}>
                Logout
              </button>
              :
              <div className="flex space-x-4 items-center">
                <Link to='/auth/signup'>
                  <button className={buttonStyle}>
                    Signup
                  </button>
                </Link>
                <Link to='/auth/signin'>
                  <button className={buttonStyle}>
                    Login
                  </button>
                </Link>
              </div>
          }
        </div>
        <ToastContainer />
      </nav>
    </>
  )
}

export default Navbar;
