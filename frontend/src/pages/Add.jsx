import React from 'react'
import Navbar from '../components/Navbar'
function Add() {
  return (
    <>
    <Navbar></Navbar>
    <div className="add-out bg-orange-400 h-[full] w-full px-20 py-4">
      <div className="add-in">
        <form action="">
          <div className="inputcontainer">
            <label htmlFor=""> Blog Name</label>
            <textarea name="" id="" className='w-full'></textarea>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Blog Description</label>
            
            <textarea name="" id="" type='text'  className='w-full h-80'></textarea>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Blog-Image</label>
            <input type="file" />
            
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Paragraph Name</label>
            <textarea name="" id="" className='w-full'></textarea>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Paragraph Description</label>
            
            <textarea name="" id="" type='text'  className='w-full h-80'></textarea>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Paragraph-Image</label>
            <input type="file" />
            
          </div>
          <button type='submit'>Add More paragraphs</button>
        </form>
        <button type='submit'>submit
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    </div>
    
    </>
  )
}

export default Add