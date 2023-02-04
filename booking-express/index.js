const express= require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const {authRoute}=require("./apis/routes/auth.route.js")
const {hotelRoute}=require("./apis/routes/hotels.route.js")


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

app.use(express.json())

app.use("/auth", authRoute)
app.use("/hotel", hotelRoute)

app.get("/",(req, res)=>{
    res.send("Welcome to Booking App")
})

app.use((error, req, res, next)=>{
    let errorMsg= error.message;
    let errorStatus=error.status;
    return res.json({
        success: false,
        message: errorMsg,
        status: errorStatus,
        stack: error.stack
    })
})

app.listen(process.env.port, ()=>{
    console.log("connected to backend")
    connect()
})