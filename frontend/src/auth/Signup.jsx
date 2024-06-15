import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <>
    <Navbar></Navbar>
    <div className="authout flex w-[full] bg-violet-400 h-[670px] p-4 items-center justify-center">
        <div className="authin flex">
            <div className="left-side bg-blue-500 w-72 h-80 mr-2">

            </div>
            <div className="right-side flex flex-col items-stretch">
                <form action="" className='flex flex-col justify-between items-center h-80 '>
                 <div className="forminputcont">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='enter your username here' />
                 </div>
                 <div className="forminputcont">
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' placeholder='enter your password  here' />
                 </div>
                 <div className="forminputcont">
                    <label htmlFor="confirmation">Confirm Password</label>
                    <input type="text" id='confirmation' placeholder='please confirm your password' />
                 </div>
                 <button type='submit'> Submit</button>
                 <p className='inline-block '>Already have an account?  </p><Link to='/auth/signin'> <u>Login</u></Link>

                </form>
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Signup