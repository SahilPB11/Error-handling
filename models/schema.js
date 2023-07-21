const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type: "String",
        required: [true, "Please enter ur name"]
    },
    email:{
        type: "String",
        required: [true, "Please enter ur email"],
        unique: true,
    }
})

module.exports = mongoose.model("User", schema)