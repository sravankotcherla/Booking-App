const express=require("express")
const { createHotel, getHotelById, getAllHotels, updateHotelById, deleteHotel } = require("../controllers/hotel.controller.js")

const {Hotel}= require("../models/hotel.model.js")

const hotelRoute= express.Router()

hotelRoute.post("/",createHotel)
hotelRoute.get("/", getAllHotels)
hotelRoute.get("/:id", getHotelById)
hotelRoute.put("/:id", updateHotelById)
hotelRoute.delete("/:id", deleteHotel)

module.exports={hotelRoute}