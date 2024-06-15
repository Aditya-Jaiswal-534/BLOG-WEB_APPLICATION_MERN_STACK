const express = require('express')

const app = express();
 const bodyParser  = require('body-parser');// for parsing the json data
 const cors = require('cors');// for persmission for the front end link to use our backend
const authRoute = require("./Routes/auth")
const PORT = 8000;
require('dotenv').config();
require('./db')
const user = require('./Models/UserSchema')
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoute);

app.get('/', (req, res) =>{
    res.send('this api is working properly')
});


app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})