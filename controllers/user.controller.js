const userModel = require("../routes/user.route")
const displayWelcome = (req,res)=>{
    let allStudents = [
        {firstname:"seyi",lastname:"sola"}
    ]
    res.send({message:allStudents})
}
const register = (req,res)=>{
     
     console.log(req.body)
     let form = new userModel(req.body)
     form.save()
     .then(()=>{
        res.send({status:true,message:"registration successful"})
     })
     .catch((err)=>{
        console.log(err)
     })
     
}
module.exports = {displayWelcome,register}