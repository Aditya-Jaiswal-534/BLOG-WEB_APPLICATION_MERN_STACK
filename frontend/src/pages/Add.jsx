import React, { useState,useEffect,useRef } from 'react'
import Navbar from '../components/Navbar'
import { AiFillCloseCircle } from "react-icons/ai";
import ClockLoader from "react-spinners/ClockLoader";
import {toast,ToastContainer} from 'react-toastify'


// class FormData {
//   constructor(title, description, image = null, imageUrl = '', paragraphs = [], category,myimage= null) {
//     this.title = title;
//     this.description = description;
//     this.image = image;
//     this.imageUrl = imageUrl;
//     this.paragraphs = paragraphs;
//     this.category = category;
//     this.myimage=myimage
//   }


//   }

// FormData = {
  // title: '',
  // description: '',
  // image: null,
  // imageUrl: '',
  // paragraphs: [],
  // category: '',
  // myimage:null
// }

function Add() {
  let [loading,setLoading] = useState(false);
  // const [formData,setFormData] = useState({
  //   title: '',
  // description: '',
  // myimage:{},
  // image: {},
  // imageUrl: '',
  // paragraphs: [],
  // category: '',
  
  // })
    const checkLogin = async ()=> {
   
    fetch(`${import.meta.env.VITE_BACKEND_API}/auth/checklogin`, {
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
        console.log(response)



        if (response.ok) {
        

        } else {
          
          window.location.href = "/auth/signin"
            
        }
      })
      .catch((error) => {
        window.location.href =  "/auth/signin"

      })
  };
  useEffect(() => {
    checkLogin();
  }, []);

  const [blog, setBlog] = useState({
    title: '',
    description: '',
    image: null,
    imageUrl: '',
    paragraph: [],
    category: '',
  });

  const [categories, setCategories] = useState([])


  const getCategories = () => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/blogcategories`)
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        // console.log(response.categories)
        setCategories(response.categories)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getCategories()
  }, [])

  const [paragraphForm, setParagraphForm] = useState({
    title: '',
    description: '',
    image: null,
    imageUrl: '',
    position: '',
    createdAt: null
  })
  const sortParagraphs = (a, b) => {
    if (a.position === b.position) {
      return b.createdAt - a.createdAt;
    }
    return a.position.localeCompare(b.position);
  }

  const deleteParagraph = (paragraph) => {
    const updatedParagraphs = blog.paragraph.filter((p) => p.createdAt !== paragraph.createdAt);
    setBlog({
      ...blog,
      paragraph: updatedParagraphs,
    });
  }
  const pushParagraphToBlog = () => {
    let tempPg = paragraphForm
    tempPg.createdAt = new Date().getTime();
    setBlog({
      ...blog,
      paragraph: [
        ...blog.paragraph, paragraphForm
      ]
    })

    let nextPosition = String(parseInt(paragraphForm.position) + 1);
    setParagraphForm({
      ...paragraphForm,
      title: '',
      description: '',
      position: nextPosition,
      createdAt: null
    })
  }

  const uploadImage = async (image) => {
    try {
      console.log(typeof image)
    const formData =  new FormData();
    formData.append('myimage', image);
      console.log('this is formdata',formData);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/image/uploadimage`, {
        method: 'POST',
        body: formData,
        credentials:'include'
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Image uploaded successfully:', data);
        // You can handle the response data here or return it to the caller.
        return data.imageUrl;
      } else {
        // Handle the case where the request failed (e.g., server error)
        console.error('Failed to upload the image.');
        return null;
      }

    }
    catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  const uploadBLog = async () => {
    checkLogin();
    if (!blog.title || !blog.description || !blog.category) {
      // Handle the case where required fields are missing
      toast("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    let tempblog = blog
    if (blog.image) {
      let imgUrl = await uploadImage(blog.image)
      tempblog.imageUrl = imgUrl
      // console.log(tempblog)
    }
    for (let i = 0; i < tempblog.paragraph.length; i++) {
      let tempimg = tempblog.paragraph[i].image
      if (tempimg) {
        let imgURL = await uploadImage(tempimg);
        tempblog.paragraph[i].imageUrl = imgURL;
      }
    }

  console.log('BEFORE UPLOADING ' , blog)
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
      credentials : 'include'
    });

    if (response.ok) {
      const data = await response.json();
      // toast("blog created successfully",{
      //   type: 'success',
      //   position: 'top-right',
      //   autoClose: 2000

      // })
      alert('blog created succesfully')
      setLoading(false);
      setBlog({ title: '',
        description: '',
        image: null,
        imageUrl: '',
        paragraph: [],
        category: '',});
  
      // console.log("Blog post created successfully:", data);
      // Optionally, you can navigate to another page or display a success message.
    }
    else {
      console.log(response)
      toast('Failed to create the blog post',{
        type: 'error',
        position: 'top-right',
        autoClose: 2000
      })
      setLoading(false);
 
      // Handle the case where the request failed (e.g., server error)
      // console.error("Failed to create the blog post.");
    }

  }
  useEffect(() => {
    console.log(blog)
  }, [blog])

  return (
    <>
  
      {
        loading &&
        <div className='loaderfullpage'>
          <ClockLoader
            color="#36d7b7"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }
    <Navbar></Navbar>
    <div className="add-out bg-orange-400 h-[full] w-full px-20 py-4">
      <div className="add-in">
        <form action="">
          <div className="inputcontainer">
            <label htmlFor=""> Blog Name</label>
            <textarea name="" id="" className='w-full'  value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}></textarea>
          </div>
          <div className='inputcontainer'>
            <label>Blog Category</label>
            <select
              value={blog.category} // Set the selected category value
              onChange={(e) => setBlog({ ...blog, category: e.target.value })} // Update the selected category
            >
              <option value="">Select a category</option> {/* Default option */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Blog Description</label>
            
            <textarea name="" id="" type='text'  className='w-full h-80'   value={blog.description}
             placeholder="Enter Blog Description"
              onChange={(e) => setBlog({ ...blog, description: e.target.value })}></textarea>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Blog-Image</label>
            <input type="file" onChange={(e) => {
                const selectedImage = e.target.files?.[0];// Get the selected image file
                if (selectedImage) {
                  setBlog({ ...blog, image: selectedImage }); // Update the paragraphImage state with the URL
                }
              }} />
            
          </div>
          <div className='blogtempparagraphs'>
            {
              blog.paragraph.sort(sortParagraphs).map((paragraph) => (
                <div key={String(paragraph.createdAt)}>
                  <AiFillCloseCircle className="closebtn"
                    onClick={() => {
                      deleteParagraph(paragraph)
                    }}
                  />

                  <div className='section1'>
                    <h1>{paragraph.title}</h1>
                    <p>{paragraph.description}</p>
                  </div>
                  {paragraph.image && <img src={URL.createObjectURL(paragraph.image)} alt={`Image for ${paragraph.title}`} />}
                </div>
              ))
            }
          </div>
          <div className='forminput_cont'>
              <label>Paragraph Position</label>
              <input type="number"
                value={paragraphForm.position}

                placeholder="Enter paragraph Position"
                onChange={(e) => setParagraphForm({ ...paragraphForm, position: e.target.value })} />
            </div> 
          <div className="inputcontainer">
            <label htmlFor=""> Paragraph Name</label>
            <textarea name="" id="" className='w-full' value={paragraphForm.title} placeholder="Enter paragraph Title" onChange={(e) => setParagraphForm({ ...paragraphForm, title: e.target.value })} ></textarea>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Paragraph Description</label>
            
            <textarea name="" id="" type='text'  className='w-full h-80' placeholder="Enter Paragraph Description" value={paragraphForm.description} onChange={(e) => setParagraphForm({ ...paragraphForm, description: e.target.value })}></textarea>
          </div>
          <div className="inputcontainer">
            <label htmlFor=""> Paragraph-Image</label>
            <input type="file" id='pgimg'
                onChange={(e) => {
                  const selectedImage = e.target.files?.[0];// Get the selected image file
                  if (selectedImage) {
                    // const imageUrl = URL.createObjectURL(selectedImage); // Create a URL for the selected image
                    setParagraphForm({ ...paragraphForm, image: selectedImage }); // Update the paragraphImage state with the URL
                  }
                }} />
            
          </div>
          <button type='button'  onClick={(e) => {
              e.preventDefault(); // Prevent the default form submission
              pushParagraphToBlog();
            }}>Add More paragraphs</button>
        </form>
        <button type='submit' className="main_button"  onClick={(e) => {
              e.preventDefault(); // Prevent the default form submission
              uploadBLog();}}>submit
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default Add