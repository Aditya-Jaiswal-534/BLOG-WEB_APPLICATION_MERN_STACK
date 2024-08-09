import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../../assets/slider_main/slider1.png';
import slider2 from '../../assets/slider_main/slider2.jpg';
import slider3 from '../../assets/slider_main/slider3.jpeg';

// Import required Swiper modules
import { Pagination, Navigation } from 'swiper/modules';

function HomeSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center p-4 border-8 bg-gradient-to-r from-orange-300 to-orange-300 border-black">
            <img
              src={slider1}
              alt="Slide 1"
              className="w-full h-auto max-w-[1000px] max-h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center p-4 border-8  border-black">
            <img
              src={slider2}
              alt="Slide 2"
              className="w-full h-auto max-w-[1000px] max-h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center p-4 border-8 border-black">
            <img
              src={slider3}
              alt="Slide 3"
              className="w-full h-auto max-w-[1000px] max-h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSlider;
