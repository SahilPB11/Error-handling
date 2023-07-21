const { log } = require("console");
const express = require("express");


class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
const app = express();
app.get("/", (req, res, next) => {
    console.log("a");
     next(new ErrorHandler("heloo", 404));

}, (req, res, next) => {
    console.log("b");
    next();
}, (req, res, next) => {
    console.log("c");
})

app.use((err, req, res, next) => {
    console.log(Object.values(err));
    err.statusCode  = err.statusCode || 401;
    err.message = err.message || "inter error";

    res.status(err.statusCode ).json({
        message:err.message,
    })
})

app.listen(5000, () => {
   console.log(" server is working");
})

