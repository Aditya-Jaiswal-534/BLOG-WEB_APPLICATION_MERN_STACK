import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";



export default function Profile() {
  const [user,setUser] = useState({});
  const [loading , setLoading] = useState(true);
  const fetchUserdata = async()=>{
   try{
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/data/user`,{
        method:'GET',
        headers:{
          'content':'application/json'
        },
        credentials:'include'

    })
    const res = await response.json();
    console.log(res.data)
    setUser(res.data);
    setLoading(false);

   }
   catch(err){
    setLoading(false)
    throw(err);
   }
      
  }
  useEffect(()=>{
    fetchUserdata();
  })
  return (
   
    <>
    {
      loading ?
      <div>loading..</div>
      :
      <div>

     
      <UserProfile user = {user}></UserProfile>
      </div>
    }
    </>
  )
}
