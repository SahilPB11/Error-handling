const ErrorHandler = require("../utils/errorHandler.js")
const User = require("../models/schema.js")

const userFun = async(req, res, next) => {
   try{
    const userExist = false;


    if(userExist){
        return next(new ErrorHandler("UserAlreay Exist", "400"))
    }
   await User.create({
        name:"abhi",
        email:"garg@gmail.com",
    });
   res.status(200).json({message: "User created succesfully"});
   }catch(error){
    return next(error)
   }
}

module.exports = {userFun};