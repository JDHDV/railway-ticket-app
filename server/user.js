const express=require("express");
const Router=express.Router();
const User=require("./model").getModel("user");

const utils=require("utility");

Router.get("/list",(req,res)=>{
	//清空数据库
//	User.remove({},(err,data)=>{});
	
	//查看数据库数据,进行调试
	User.find({},(err,data)=>{
		return res.json(data);
	})
})

Router.get("/info",(req,res)=>{
	const {userid}=req.cookies;
	if(!userid){
		res.json({code:1})
	}
	User.findOne({_id:userid},{pwd:0,__v:0,repeatpwd:0},(err,data)=>{
		if(err){
			return res.json({code:1,msg:"后端出错！"});
		}
		if(data){
			return res.json({code:0,data});
		}
	})
})

Router.post("/register",(req,res)=>{
	const {user,pwd,repeatpwd,name,idcardtype,idcardnum,email,phone,type}=req.body;
	User.findOne({user},(err,data)=>{
		if(data){
			return res.json({code:1,msg:"用户名已存在！"})
		}
		
		User.create({user,pwd:mdPwd(pwd),repeatpwd,name,idcardtype,idcardnum,email,phone,type},(err,data)=>{
			if(err){
				return res.json({code:1,msg:"后端出错！"});
			}
			
			const _id=data._id;
			res.cookie("userid",_id);
			return res.json({code:0,data:{user,type,_id}})
		})
	})
})

Router.post("/login",(req,res)=>{
	const {user,pwd}=req.body;
	User.findOne({user,pwd:mdPwd(pwd)},{pwd:0,repeatpwd:0,__v:0},(err,data)=>{
		if(!data){
			return res.json({code:1,msg:"用户名或密码错误！"})
		}
		const _id=data._id;
		res.cookie("userid",_id);
		return res.json({code:0,data});
	})
})

//加密方法
function mdPwd(pwd){
	const salt="hfhaojf47033879KJPO^#&@ddWEW43";
	return utils.md5(utils.md5(salt+pwd+salt));
}

module.exports=Router;