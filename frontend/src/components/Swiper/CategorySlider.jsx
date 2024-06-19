import React, { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from './CategoryCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const categorystyles = 'flex ml-12 mt-6 h-[200px] w-[200px] bg-black';
// import required modules
import { Pagination } from 'swiper/modules';

function CategorySlider() {
    const [categories,setCategories] = useState([{name:'',path:'',bgcolor:''}]);
    const getCategories = () => {
      fetch(`${import.meta.env.VITE_BACKEND_API}/blogcategories`)
        .then((res) => {
          return res.json()
        })
        .then(async (response) => {
       
          const tempcat = await Promise.all(
            response.categories.map(async (category) => ({
              name: category,
              path: category,
              bgcolor: 'black'
              // bgcolor: await generate(),
            }))
          );
          // console.log(tempcat)
          setCategories(tempcat)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    useEffect(() => {
      getCategories()
    }, [])

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
   {
          categories.map((category) => {
            return (
              <SwiperSlide>
                <CategoryCard {...category} />
              </SwiperSlide>
            )
          })
        }
     
    </Swiper>
  </>
  )
}

export default CategorySlider