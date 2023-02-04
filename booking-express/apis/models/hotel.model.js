const mongoose=require("mongoose")

const hotelSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    photos:{
        type: String,
        required: false
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    rooms:{
        type: [String],
    },
})

const Hotel= mongoose.model("hotel", hotelSchema)
module.exports={Hotel}