const express = require('express');
const router  = express.Router();
const User = require('../Models/UserSchema')

router.get('/test', async (req,res)=>{
    res.json({message:'auth api is working'})
})

router.post('/register', async (req,res)=>{
try{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(401).json({error:'please add all the fields'})}
        const existinguser = await User.findOne({email: email
    });
    if(existinguser){
        return res.status(422).json({error:'user already exist'})
    }
    const newuser = new User({
        name,
        email,
        password

    })
     newuser.save();
    res.status(201).json({message:'user created successfully'});
} catch(err){
    console.log(err)
}

})

module.exports = router;