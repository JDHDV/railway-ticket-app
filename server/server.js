const express =require("express");
const app=express();
const userRouter=require("./user");
const ticketRouter=require("./ticket");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");

const Router=express.Router();
const mongoose=require("mongoose");
const data=require("../src/data.js");
mongoose.connect("mongodb://localhost:27017/ticket");

app.use(cookieParser());
app.use(bodyParser());
app.use("/user",userRouter);
app.use("/ticket",ticketRouter);

app.listen(8080,()=>{
	console.log("服务器已开启")
})