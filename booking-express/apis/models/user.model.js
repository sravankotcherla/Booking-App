const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        unique: true
    },
    isAdmin:{
        type: Boolean,
        required: false
    }
}, {timestamps: true})

const User= mongoose.model("users", userSchema)
module.exports={User}