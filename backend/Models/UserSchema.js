const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        blogs:{
            type:Array,
            default:[]
        }
    }
)
userSchema.pre('save',function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = bcrypt.hash(user.password, 10);
    }
    next();

})
module.exports = mongoose.model('User', userSchema)