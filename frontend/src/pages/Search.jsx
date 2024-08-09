import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaSearchengin } from "react-icons/fa6";
import {toast,ToastContainer} from 'react-toastify'
function Search() {
     const [search,setSearch] = useState({search:"",page:Number});
     const [searchData,setSearchData] = useState({blogs:[],totalPages:0,currentPage:0,totalBlogs:0})
     const handleChange = (e) => {
          setSearch({
            ...search,
            search : e.target.value,
          });
     }
     const handleSearch = async (e) => {
      
      
      await fetch(`${import.meta.env.VITE_BACKEND_API}/blog/getblogbysearch`,{
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify(search)
       
       
    }).then((res)=>{
      return res.json();
    }).then((response)=>{
      if(response.ok){
              setSearchData({
                ...searchData,
                blogs:response.data.blogs,
                totalPages:response.data.totalPages,
                currentPage:response.data.currentPage,
                totalBlogs:response.data.totalBlogs,
              });
             
              console.log(searchData.blogs.length);
         
    
      }
      else{
        console.log(response.error);
      }

    })
    .catch((err)=>{
      console.log(err);
    })
     }
     
  return (
    <>
    <Navbar></Navbar>
      <div className="search-out w-full  flex justify-center p-4">
        <div className="search-in flex flex-col w-[70%] justify-center p-2">
          <div className='w-full flex items-center bg-black p-4 rounded-md justify-between'>
               <input type="text" placeholder='Enter your text here' className='border-2 w-full rounded-lg p-2 placeholder:font-serif placeholder:text-cyan-700' value={search.search} onChange={handleChange}/>
               <FaSearchengin className='icon object-fill  w-10 h-fit ml-2  text-cyan-400 ' onClick={handleSearch} />
               
               
          </div>
          {
               
               searchData.blogs.length
               ? 
               <div className='searchout flex flex-col p-2 gap-3'>
                 {searchData.blogs.map((blog)=>{
                     return (
                       <div  key = {blog._id}className='search-card flex  items-center p-4 bg-slate-700 text-white rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:duration-500'>
                         <img src={blog.image} alt="" className='w-16 h-16 object-fit'/>
                         <div className='flex  items-center mt-2'>
                           <h1 className='text-xl'>{blog.title}</h1>
                         
                         </div>
                       </div>
                     )
                 })}
               </div>
               :
               <div>No</div>

       

              }
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default Search