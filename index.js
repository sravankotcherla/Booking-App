const express= require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")

const app=express()
dotenv.config()

const connect =async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB")
    }catch(error){
        throw(error)
    }
}

app.listen(process.env.port, ()=>{
    console.log("connected to backend")
    connect()
})