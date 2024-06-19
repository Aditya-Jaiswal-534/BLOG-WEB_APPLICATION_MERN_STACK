import React,{ FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ClockLoader from "react-spinners/ClockLoader";
import BlogSlider from '../components/Swiper/BlogSlider';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

function BlogPage() {
    const [SearchParameter] = useSearchParams();
    const blogid = SearchParameter.get('blogid');
    console.log(blogid);
    const [loading, setLoading] = useState(false)
    const [blog, setBlog] = useState({
        _id: '',
        title: '',
        description: '',
        imageUrl: '',
        paragraph: [],
        category: '',
        owner: '',
        createdAt: '',
        updatedAt: ''
    });
    const [blogcreatedat, setBlogcreatedat] = useState('')
    const getBlogbyId = () => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_BACKEND_API}/blog/${blogid}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                setLoading(false)
                if (response.ok) {
                    console.log(response.data.blog)
                    setBlog(response.data.blog);
                    const formattedDate = formatDate(response.data.blog.createdAt);
                    setBlogcreatedat(formattedDate)
                }
                else {
                    toast(response.message, {
                        type: 'error',
                    })
                }
            })
            .catch((error) => {
                setLoading(false)

                toast(error.message, {
                    type: 'error',
                })

            })
    }

    useEffect(() => {
        getBlogbyId()
        window.scrollTo(0, 0);
    }, [])
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate();
        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${day} ${monthNames[monthIndex]} ${year}`;
    }



  return (
    <div className='blogpage-out'>
    <Navbar />

    {
        loading && blog._id == '' ?
            <div className='loaderfullpage'>
                <ClockLoader
                    color="#36d7b7"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            :
            <div className='blogpage'>
                <div className='c1'>
                    <p className='createdat'>Created at {blogcreatedat}</p>
                    <p className='title'>{blog.title}</p>
                    <p className='category'>{blog.category}</p>

                   {
                    blog.imageUrl.length>0 && 
                    <Image src={blog.imageUrl} alt={blog.title} width={100} height={100} className='blogimg' unoptimized />
                   }
                    <p className='description'>{blog.description}</p>
                </div>
                {
                    blog.paragraph.map((paragraph, index) => (
                        <div className={
                            index % 2 === 0 ? 'c2left' : 'c2right'
                        } key={index}>
                            {
                                paragraph.imageUrl.length > 0 &&
                                <Image src={paragraph.imageUrl} alt={blog.title} width={100} height={100}
                                    className='paraimg' unoptimized />
                            }
                            <div>
                                <p className='title'>{paragraph.title}</p>
                                <p className='description'>{paragraph.description}</p>
                            </div>
                        </div>
                    ))
                }
                <BlogSlider />
            </div>
    }

    {/* <Footer /> */}
</div>
  )
}

export default BlogPage