import React, { Component } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const categorystyles = 'flex mt-6 h-[300px] w-[200px] bg-black';
// import required modules
import { Pagination } from 'swiper/modules';
export class BlogSlider extends Component {
  render() {
    return (
        <>
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
          className="mySwiper"
        >
          <SwiperSlide><div className={categorystyles}></div> </SwiperSlide>
          <SwiperSlide><div className={categorystyles}></div> </SwiperSlide>
          <SwiperSlide><div className={categorystyles}></div></SwiperSlide>
          <SwiperSlide><div className={categorystyles}></div></SwiperSlide>
          <SwiperSlide><div className={categorystyles}></div></SwiperSlide>
          <SwiperSlide><div className={categorystyles}></div></SwiperSlide>
         
        </Swiper>
      </>
    )
  }
}

export default BlogSlider