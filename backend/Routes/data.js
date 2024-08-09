const  express = require('express');
const router = express.Router();
const authTokenHandler = require('../Middlewares/authTokenHandler')
const errorHandler = require('../Middlewares/errorHandler')
const User = require('../Models/UserSchema')

router.get('/user',authTokenHandler,async (req,res)=>{
    try{
        const id = req.userId;
        const user = await User.findById({
            _id:id
        })
        if(!user){
            res.status(400).json({
                ok:'false',
                message:'profile cannot be shown as user does not exist',
                data:[]
            })
        }
        else{
            res.status(200).json({
                ok:true,
                message:"profile fetched successfully ",
                data:user
            })
        }

    }
    catch(err){
        throw(err);
    }
       
})



module.exports = router;