const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');
 const Blog = require('../Models/BlogSchema');
const authTokenHanlder = require('../Middlewares/authTokenHandler');
const jwt = require('jsonwebtoken');
const authTokenHandler = require('../Middlewares/authTokenHandler');

const checkOwner = async (req,res,next) =>{
    try{
        const blog = await Blog.findById(req.params.id);
        if(!blog) return res.status(404).json({
            message: "Blog not found"
        })
        if(blog.owner.toString()!== req.userId) return res.status(401).json({
            message:"action restricted, you are not the owner of this blog"
        })
        else{
            //// res.status(200).json({message:"owner verified acces granted"});
            req.blog  = blog;
            next();
        }

    }catch(err){
        res.status(500).json({message:err.message});
    }


}
router.get('/test',authTokenHanlder,(req,res)=>{
    res.json({message:"this blog api is working properly"})
})
// C R U D OPERATONS

router.post('/',authTokenHanlder,async (req,res)=>{
    try{ const {title,description,image,paragraph} = req.body;
     const blog = new Blog({
        title,description,image,paragraph,owner:req.userId
     })
     await blog.save();
     const user = await User.findById(req.userId);
     if(!user){
         return res.status(404).json({message:"user not found"});
     }
     user.blogs.push(blog._id);
     await user.save();
     res.status(201).json("blog created successfully");

    }
    catch(err){
        res.status(500).json({message:err.message})
    }

})

router.delete('/:id',authTokenHandler,checkOwner,async (req,res)=>{
   try{ const deletedblog = await Blog.findByIdAndDelete(req.params.id);
    if(!deletedblog){
        return res.status(404).json({message:"blog not found"})
    }
    const user = await User.findById(req.userId);
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    user.blogs.pull(req.blog._id);
    await user.save();
    res.status(200).json({message:"blog deleted successfully"});


}
catch(err){
    res.status(500).json({message:err.message})
}

})

router.put('/:id',authTokenHanlder,checkOwner,async (req,res)=>{
  try{
    const {title,description,image,paragraph} = req.body;
     const updatedblog = await Blog.findByIdAndUpdate(req.params.id,{title,description,image,paragraph},{new:true});
     if(!updatedblog){
         return res.status(404).json({message:"blog not found"})
     } 
     res.status(200).json({message:"updated blog"});
  }catch(err){
    res.status(500).json({message:err.message})
  }
})

router.get('/:id',async (req,res)=>{
       try{ const blog = await Blog.findById(req.params.id);
        if(!blog) return res.status(404).json({message:"blog not found check your id"})
        res.json(blog);
       } catch(err){
        res.status(500).json({message:err.message})

       }
})


// search api

router.get('/', async (req,res)=>{
    try{
        const search = req.body.search||'';
        const page = parseInt(req.body.page)||1;
        const perpage = 2;


        const searchQuery = new RegExp(search,'i');
        const totalBlogs = await Blog.countDocuments({title:searchQuery});
        const totalPages = Math.ceil(totalBlogs / perpage);
        if(page<1||page>totalPages) return res.status(400).json({message:'Invalid page number'});
        const skip = (page-1)*perpage;
        const blogs = await Blog.find({title:searchQuery}).sort({createdAt:-1}).skip(skip).limit(perpage);
        res.status(200).json({blogs,totalPages,currentPage: page})
           
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
module.exports = router;