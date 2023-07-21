const mongoose = require("mongoose");

const connectDb = async() => {
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/expressError", {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Connection is success");
       })
    }catch(error){
        console.log(error);
    }
}
module.exports = connectDb;