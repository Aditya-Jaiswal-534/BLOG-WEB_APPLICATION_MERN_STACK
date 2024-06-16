const jwt = require('jsonwebtoken')
function authTokenHandler(req,res,next){
    const authToken =req.cookies.authToken;
    const refreshToken = req.cookies.refreshToken;
    console.log('authToken handler middleware called')
    if(!authToken ||!refreshToken){
        return res.status(401).json({
            message:'unauthenticated entry , no tokens provided'
        })
    }
    jwt.verify(authToken,process.env.JWT_SECRET_KEY,(err,decoded)=>{
       if(err){
        jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET_KEY,(refreshErr,refreshDecoded)=>{
            if(refreshErr){
                return res.json({message:'Authentication failed both tokens are invalid'});
            }
            else{
                 const newAuthToken = jwt.sign({userId:refreshDecoded.userId},process.env.JWT_SECRET_KEY,{expiresIn:'10m'});
                 const newRefreshToken = jwt.sign({userId:refreshDecoded.userId},process.env.JWT_REFRESH_SECRET_KEY,{expiresIn:'40m'});
                 res.cookie('authToken',newAuthToken,{httpOnly:true})
                 res.cookie('refreshToken',newRefreshToken,{httpOnly:true});
                 req.userId = refreshDecoded.userId;
                 next()
                
            }




        })
       } 
       else{
        req.userId = decoded.userId;
        next();
       }
    })


}
module.exports = authTokenHandler;