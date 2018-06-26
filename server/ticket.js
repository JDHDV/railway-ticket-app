const express=require("express");
const Router=express.Router();
const Ticket=require("./model").getModel("ticket");
const dataArr=require("../src/data.js");

const utils=require("utility");

Router.get("/ticketlist",(req,res)=>{
	//清空数据库
//	Ticket.remove({},(err,data)=>{});
	
	//查看数据库数据,进行调试
	Ticket.find({},(err,data)=>{
		return res.json(data);
	})
})

Router.post("/searchresult",(req,res)=>{
	// const {train_no,train_type,start_station,start_station_type,end_station,end_station_type,start_time,end_time,run_time,price_list,price_type,price}=req.body;
// 	console.log()
	// console.log(req);
})

Router.get("/creatlist",(req,res)=>{
	//清空数据库
//	Ticket.remove({},(err,data)=>{});
})
module.exports=Router;