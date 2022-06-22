//imports and stuff
const express = require("express");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
// const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");
const app = express();
// const PostModel = require("./Models/posts");
// const postsRoutes = require('./Routes/post')
// mongoose.connect('mongodb://localhost:27017/database').then(() =>{
//     console.log("Connected to DB")
// }).catch(() => {
//     console.log("Failed to connect to DB")
// });
const port = 3000;
const protectedRoute = express.Router();

app.use(express.json());
app.use(cors());
// app.use("/api/posts",postsRoutes);

app.all('*', function(req, res, next){ 
    res.header("Access-Control-Allow-Origin","*");//Header access rule
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");//allow methods
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
});
//Endpoints section
app.get('/api/getUsers', function(req, res){
   res.send([
       {
            username:"brayan",
            name:"brayan",
            email:"brayan@prieto.com"
       },
       {
        username:"fernando",
        name:"fernando",
        email:"fernando@tarango.com"
        },
        {
            username:"gaby",
            name:"gaby",
            email:"gaby@rojas.com"
        },
        {
            username:"edgar",
            name:"edgar",
            email:"edgar@rivas.com"
        }
    ]
    );
       
});
// app.put('/api/put', function(req, res){
//     res.send(
//         {
//             msg:'hello', 
//             content: 'this is a put!'
//         });
//  });

//  app.delete('/api/delete', function(req, res){
//     res.send(
//         {
//             msg:'hello', 
//             content: 'this is a delete!'
//         });
//  });
app.listen(port, function(){
    console.log('Api is runing')
});