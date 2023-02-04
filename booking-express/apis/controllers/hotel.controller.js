const {Hotel}= require("../models/hotel.model.js")

module.exports.createHotel= async(req, res, next)=>{
    const newHotel= new Hotel(req.body)
    try{
        const savedHotel= await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(error){
        return next(error)
    }
}

module.exports.getAllHotels= async(req,res, next)=>{
    try{
        const reqHotels= await Hotel.find()
        res.status(200).json(reqHotels)
    }catch(error){
        return next(error)
    }
}

module.exports.getHotelById=async(req,res,next)=>{
    try{
        const reqHotel= await Hotel.findById(req.params.id)
        res.status(200).json(reqHotel)
    }catch(error){
        return next(error)
    }
}

module.exports.updateHotelById=async(req,res)=>{
    try{
        const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    }catch(error){
        return next()
    }
}

module.exports.deleteHotel=async(req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).send("Hotel deleted with id")
    }catch(error){
        res.status(500).json(error)
    }
}