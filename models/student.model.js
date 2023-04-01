const mongoose = require("mongoose")
// Create Data into Database
let studentSchema = mongoose.Schema({
    firstname : {type:String,required:true},
    lastname : {type:String,required:true},
    email : {type:String,unique:true,required:true},
    password: {type:String,required:true},
    creationDate : {type:Date,default:Date.now}
})

// Create A Model -  nameofdocument,schema
let studentModel = mongoose.model("students",studentSchema)
module.exports = studentModel