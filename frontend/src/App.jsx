import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomeSlider from './components/Swiper/HomeSlider'
import CategorySlider from './components/Swiper/CategorySlider.jsx'
import BlogSlider from './components/Swiper/BlogSlider.jsx'
function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
     <Navbar></Navbar>
     <HomeSlider></HomeSlider>
     <CategorySlider></CategorySlider>
     <BlogSlider></BlogSlider>
     
    </>
  )
}

export default App
