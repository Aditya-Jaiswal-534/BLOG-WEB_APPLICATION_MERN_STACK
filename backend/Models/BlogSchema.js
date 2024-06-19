const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const paragraphSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    paragraph :{
        type:[paragraphSchema],
       default:[]
    },
    owner :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})
const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;