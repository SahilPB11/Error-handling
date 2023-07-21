const express = require("express");
const router = require("./routes/user.js");
const errorMiddleWare = require("./middlerwares/error.js");
const connectDb = require("./data/db.js");

const app = express();


app.use("/users",router);
connectDb();

app.listen(5000, () => {
    console.log(" server is working");
 });
app.use(errorMiddleWare);