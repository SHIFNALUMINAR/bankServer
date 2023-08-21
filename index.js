// import express
const express=require('express')

// import env file
require('dotenv').config()

// import cors
const cors=require('cors')

// import db connection 
require('./db/dbconnection')

// import router
const rout=require('./routes/router')



// create sever using express
const server=express()

// connect with frontend
server.use(cors())

// to convert all incomming json datas into js
server.use(express.json())

server.use(rout)


// server.get('/excgetpath/newuser',(req,res)=>{
//     res.send("get request response...")
// })

// server.get('/excgetpath/lastuser',(req,res)=>{
//     res.send("get request response 2...")
// })

// port set
const port=3004 || process.env.port



// running config
server.listen(port,()=>{
    console.log(`_____Server Started At Port Number ${port}________`);
})


