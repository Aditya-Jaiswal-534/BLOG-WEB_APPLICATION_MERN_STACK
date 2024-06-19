import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx';
import Search from './pages/Search.jsx';
import Add from './pages/Add.jsx';
import './index.css'
import Profile from './pages/Profile.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx';
import Signin from './auth/Signin.jsx';
import Signup from './auth/Signup.jsx';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx';
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <h1>Error</h1>,
},{
  path: '/about',
  element: <About></About>,
  errorElement: <h1>Error</h1>,
},{
  path: '/contact',
  element: <Contact></Contact>,
  errorElement: <h1>Error</h1>,
},{
  path:'/profile',
  element: <Profile></Profile>,
  errorElement: <h1>Error</h1>,
},{
  path:'/search',
  element: <Search></Search>,
  errorElement: <h1>Error</h1>,
},{
  path:'/add',
  element: <Add></Add>,
  errorElement: <h1>Error</h1>,
},{
  path:'/auth/signup',
  element: <Signup></Signup>,
  errorElement: <h1>Error</h1>,

},{
  path:'/auth/signin',
  element: <Signin></Signin>,
  errorElement: <h1>Error</h1>,
}]);

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <RouterProvider router={router} />
    
    <ToastContainer></ToastContainer>
    {/* <App /> */}
  </React.StrictMode>,
)
