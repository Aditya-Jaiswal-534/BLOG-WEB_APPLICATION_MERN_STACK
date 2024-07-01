import React, { Component ,useState,useEffect} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from './BlogCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {toast,ToastContainer} from 'react-toastify'


// import required modules
import { Pagination } from 'swiper/modules';
const BlogSlider = () => {
  const [blogs, setBlogs] = useState([{_id: "",
    title: "",
    description: "",
    image: File | null,
    imageUrl: "",
    paragraph: [],
    category: "",}])
    const get10latestblogs = () => {
        fetch(`${import.meta.env.VITE_BACKEND_API}/blog`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })
            .then((res) => {
           
                return res.json();
            })
            .then((response) => {
                if (response.ok) {
                    console.log(response)
                    setBlogs(response.data.blogs);
                }
                else {
                    // toast(response.message, {
                    //     type: 'error',
                    // })
                }
            })
            .catch((error) => {
                // toast(error.message, {
                //     type: 'error',
                // })

            })
    }
    useEffect(() => {
        get10latestblogs();
    }, [])
  
    return (
        <>
        <div className='flex items-center justify-center p-4'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
        {
                    blogs.map((blog) => {
                        return (
                            <SwiperSlide>
                                <BlogCard {...blog} />
                            </SwiperSlide>
                        );
                    })
                }

         
        </Swiper>
        </div>
        <ToastContainer></ToastContainer>
      </>
    )
  
}

export default BlogSlider