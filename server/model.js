//操作数据库
const mongoose=require("mongoose");
const DB_URL="mongodb://localhost:27017/user"
mongoose.connect(DB_URL);

//创建表
const models={
	//用户表
	user:{
		"user":{"type":String,"require":true},
		"pwd":{"type":String,"require":true},
		"name":{"type":String,"require":true},
		"idcardtype":{"type":String,"require":true},
		"idcardnum":{"type":String,"require":true},
		"email":{"type":String},
		"phone":{"type":String,"require":true},
		"type":{"type":String,"require":true},
		"rider":{"type":Array},
		"isStudent":{"type":Boolean},
		"isStudentMsg":{"type":String}
	},
	//车票表
//	ticket:{
//		"train_no":{"type":String,"require":true},
//		"train_type":{"type":String,"require":true},
//		"start_station": {"type":String,"require":true},
//		"start_station_type":{"type":String,"require":true},
//		"end_station": {"type":String,"require":true},
//		"end_station_type":{"type":String,"require":true},
//		"start_time":{"type":String,"require":true},
//		"end_time":{"type":String,"require":true},
//		"run_time":{"type":String,"require":true},
//		"price_list": [
//			{
//				"price_type":{"type":String,"require":true},
//				"num":{"type":String,"require":true},
//				"price":{"type":String,"require":true}
//			}
//		]
//	},
	//客服聊天消息表
	chat:{
		
	}
}

for(let m in models){
	mongoose.model(m,new mongoose.Schema(models[m]));
}

mongoose.connection.on("connect",()=>{
	console.log("数据库已开启");
})

module.exports={
	getModel:function(name){
		return mongoose.model(name);
	}
}
