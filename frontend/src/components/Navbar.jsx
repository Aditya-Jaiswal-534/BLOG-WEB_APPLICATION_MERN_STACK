import React from 'react'
import { FaSearchPlus,FaRegUserCircle,FaPlusCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';
import logo from '../assets/blogging.png';



function Navbar() {
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

      </div>

    </nav>
    </>
  )
}

export default Navbar