import React, { useEffect, useState } from 'react'
import '../Swiper/blogcss.css'
const BlogCard = (data) => {
    const { title, imageUrl, _id } = data;
    const categorystyles = 'ml-12 flex mt-6 h-[300px] w-[200px] bg-black';

    return (
        <div
       
          className='blogcard w-[300px]'
            onClick={() => {
                window.location.href = `/blog?blogid=${_id}`
            }}
        >
            <div className='blogimg'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >

            </div>
            <p >
                {console.log(title)}
                {title}
            </p>
        </div>
    )
}

export default BlogCard