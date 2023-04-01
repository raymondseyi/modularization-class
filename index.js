const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const PORT = process.env.PORT
let URI = "mongodb+srv://seyidami13:mongodbpass@cluster0.jc3kz.mongodb.net/school_portal_db?retryWrites=true&w=majority"
mongoose.connect(URI).then(()=>{
   console.log("mongodb connected")
}).catch((err)=>{
    console.log("mongodb no gree connect")
    console.log(err)
})
const userRouter = require("./routes/user.route")
app.use(cors())
app.use("/user",userRouter)
app.listen(PORT,()=>{
    console.log("app has started at PORT"+ PORT)
})