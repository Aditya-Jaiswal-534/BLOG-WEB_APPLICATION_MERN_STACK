const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();
 const bodyParser  = require('body-parser');// for parsing the json data
 const allowedOrigins = ['http://localhost:5173/'];
 const cors = require('cors');// for persmission for the front end link to use our backend
 const imageuploadRoutes = require('./Routes/imageUploadRoutes')
const authRoute = require("./Routes/auth")
const blogRoute = require("./Routes/Blog")
const PORT = 8000;
require('dotenv').config();
require('./db')
const user = require('./Models/UserSchema')
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())

app.use('/auth', authRoute);
app.use('/blog', blogRoute);
app.use('/image',imageuploadRoutes);


app.get('/', (req, res) =>{
    res.send('this api is working properly')
});

app.get('/blogcategories',async (req, res) =>{
    
        const blogCategories = [
            "Technology Trends",
            "Health and Wellness",
            "Travel Destinations",
            "Food and Cooking",
            "Personal Finance",
            "Career Development",
            "Parenting Tips",
            "Self-Improvement",
            "Home Decor and DIY",
            "Book Reviews",
            "Environmental Sustainability",
            "Fitness and Exercise",
            "Movie and TV Show Reviews",
            "Entrepreneurship",
            "Mental Health",
            "Fashion and Style",
            "Hobby and Crafts",
            "Pet Care",
            "Education and Learning",
            "Sports and Recreation"
        ];
        res.json(
            {
                message: 'Categories fetched successfully',
                categories: blogCategories
            }
        )
})

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})