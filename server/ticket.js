const express=require("express");
const Router=express.Router();
const Ticket=require("./model").getModel("ticket");

const utils=require("utility");

Router.get("/ticketlist",(req,res)=>{
	//清空数据库
//	Ticket.remove({},(err,data)=>{});
	
	//查看数据库数据,进行调试
	Ticket.find({},(err,data)=>{
		return res.json(data);
	})
})

Router.get("/creatlist",(req,res)=>{
	//清空数据库
//	Ticket.remove({},(err,data)=>{});

//	Ticket.create({
//	    "train_no": "K526",
//		"train_type": "K",
//		"start_station": "上海南",
//		"start_station_type": "过",
//		"end_station": "苏州",
//		"end_station_type": "过",
//		"start_time": "04:14",
//		"end_time": "05:31",
//		"run_time": "1小时17分",
//		"price_list": [{
//				"price_type": "硬座",
//				"price": "15.5"
//			},
//			{
//				"price_type": "硬卧",
//				"price": "69.5"
//			},
//			{
//				"price_type": "软卧",
//				"price": "105"
//			}
//		]},(err,data)=>{
//		    return res.json(data);
//	})
})
module.exports=Router;