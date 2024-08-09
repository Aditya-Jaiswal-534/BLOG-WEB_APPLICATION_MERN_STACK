import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeSlider from './components/Swiper/HomeSlider';
import CategorySlider from './components/Swiper/CategorySlider';
import BlogSlider from './components/Swiper/BlogSlider';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);

  const checkLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/checkLogin`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
      const response = await res.json();
      if (!response.ok) {
        window.location.href = '/auth/signin';
      }
    } catch (err) {
      toast(err.message, {
        type: 'error',
        position: 'top-right',
        autoClose: 2000
      });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex flex-col justify-between gap-8 bg-slate-300">
        {/* HomeSlider Section */}
        <section className="relative overflow-hidden  py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <HomeSlider />
          </div>
        </section>

        {/* CategorySlider Section */}
        <section className="py-16 bg-gradient-to-l from-teal-100 to-gray-300 shadow-lg border-8 border-black rounded-lg mx-4 sm:mx-8 lg:mx-12">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Discover Categories</h2>
    <CategorySlider />
  </div>
</section>

        {/* BlogSlider Section */}
              <section className="py-16 bg-gradient-to-l from-red-100 to-gray-300 border-8 border-black rounded-lg mx-4 sm:mx-8 lg:mx-12 shadow-md">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Latest Blogs</h2>
          <BlogSlider />
        </div>
      </section>

      </div>
      <ToastContainer />
    </>
  );
}

export default App;
