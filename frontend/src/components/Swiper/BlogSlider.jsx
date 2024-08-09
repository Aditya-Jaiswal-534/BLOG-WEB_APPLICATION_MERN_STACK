import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from './BlogCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogSlider = () => {
    const [blogs, setBlogs] = useState([]);

    const get10latestblogs = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/blog/getblogbysearch`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            if (data.ok) {
                setBlogs(data.data.blogs);
            } else {
                toast(data.message, { type: 'error' });
            }
        } catch (error) {
            toast(error.message, { type: 'error' });
        }
    };

    useEffect(() => {
        get10latestblogs();
    }, []);

    return (
        <>
            <div className='bg-gradient-to-l from-red-100 to-gray-300 '>
                <div className='container mx-auto px-4'>
                    <h2 className='text-4xl font-bold text-center text-gray-800 mb-12'>
                        Explore Our Latest Blogs
                    </h2>
                    <div className='relative'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                '@0.00': { slidesPerView: 1, spaceBetween: 15 },
                                '@0.75': { slidesPerView: 2, spaceBetween: 20 },
                                '@1.00': { slidesPerView: 3, spaceBetween: 30 },
                                '@1.50': { slidesPerView: 4, spaceBetween: 40 },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {blogs.map((blog) => (
                                <SwiperSlide key={blog._id}>
                                    <BlogCard {...blog} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default BlogSlider;
