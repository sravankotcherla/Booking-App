
const {User} = require("../models/user.model.js")
const bcrypt= require("bcrypt")


module.exports.register=async(req,res,next)=>{
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    try{
        const newUser= new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(200).send("New user registered")
    }catch(error){
        next(error)
    }
}

module.exports.login= async(req,res,next)=>{
    try{
        const loginUser= await User.findOne({userName: req.body.userName})
        if(!loginUser){
            res.send("Wrong user name!!!!")
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, loginUser.password)
        if(!isPasswordCorrect){
            res.send("Wrong Password!!!!!!!!")
        }
        res.status(200).json(loginUser)
    }catch(error){
        next(error)
    }
}