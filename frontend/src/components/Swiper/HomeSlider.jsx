import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/slider_main/slider1.png';
import slider2 from '../../assets/slider_main/slider2.jpg';
import slider3 from '../../assets/slider_main/slider3.jpeg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const width = window.innerWidth;
const height = window.innerHeight;
import { Pagination, Navigation } from 'swiper/modules';
function HomeSlider() {
  return (
   <>
   <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><div className='flex items-center justify-center'><img src={slider1} alt="" width={width/2} height={height/2} className=' object-cover mt-2 '/></div></SwiperSlide>
        <SwiperSlide><div className='flex items-center justify-center'><img src={slider2} alt="" width={width/2}  className=' object-cover  mt-2'/></div></SwiperSlide>
        <SwiperSlide ><div className='flex items-center justify-center'><img src={slider3} alt="" width={width/2}  className=' object-cover mt-2 '/></div></SwiperSlide>
      </Swiper>
   </>
  )
}

export default HomeSlider