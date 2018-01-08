const express =require("express");
const app=express();
const userRouter=require("./user");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");

const Router=express.Router();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ticket");

//表名
var TicketSchema=new mongoose.Schema({
	train_no:String,
	train_type:String,
	start_station:String,
	start_station_type:String,
	end_station:String,
	end_station_type:String,
	start_time:String,
	end_time:String,
	run_time:String,
	price_list:[{
		price_type:String,
		num:String,
		price:String
	}]
});

var ticket=mongoose.model("ticket",TicketSchema);
//ticket.create({
//			"train_no": "K526",
//			"train_type": "K",
//			"start_station": "上海南",
//			"start_station_type": "过",
//			"end_station": "苏州",
//			"end_station_type": "过",
//			"start_time": "04:14",
//			"end_time": "05:31",
//			"run_time": "1小时17分",
//			"price_list": [{
//				"price_type": "硬座",
//				"num": "100",
//				"price": "15.5"
//			}, {
//				"price_type": "硬卧",
//				"num": "100",
//				"price": "69.5"
//			}, {
//				"price_type": "软卧",
//				"num": "100",
//				"price": "98.5"
//			}]
//		},(err,data)=>{
//			console.log(data);
//		})
//ticket.find({},(err,data)=>{
//	return data;
//})

Router.get("/ticketlist",(req,res)=>{
	ticket.find({},(err,data)=>{
		return res.json(data);
	})
})

app.use(cookieParser());
app.use(bodyParser());
app.use("/user",userRouter);
app.use("/ticket",ticket)

app.listen(8080,()=>{
	console.log("服务器已开启")
})