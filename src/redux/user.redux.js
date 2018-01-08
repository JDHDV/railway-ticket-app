import axios from "axios"
import {getRedirectPath} from "../utils"

const AUTH_SUCCESS="操作成功";
const ERROR_MSG="错误提示";
const LOADDATE="加载信息";
const LOGIN_OUT="退出登录";

//redirectTo：跳转记录
//mag:提示信息
//user:用户名
//pwd:密码
//repeatpwd：确认密码
//name:姓名
//idcardtype：证件类型
//idcardnum：证件号码
//email:邮箱
//phone:手机号码
//type：旅客类型
//rider:其他乘车人
//isStudent:是否购买学生票
//isStudentMsg:若优惠卡次数用完，是否补差价信息
const initState={
	redirectTo:"",
	msg:"",
	user:"",
	name:"",
	idcardtype:"",
	idcardnum:"",
	email:"",
	phone:"",
	type:"",
	rider:[],
	isStudent:false,
	isStudentMsg:""
}

function authSuccess(data){
	return {type:AUTH_SUCCESS,data}
}

function errorMsg(msg){
	return {type:ERROR_MSG,msg}
}

export function loginOutSubmit(){
	return {type:LOGIN_OUT};
}

export function loadDate(userinfo){
	return {type:LOADDATE,data:userinfo}
}

export function user(state=initState,action){
	switch(action.type){
		case AUTH_SUCCESS:
			return {...state,msg:"",...action.data,redirectTo:getRedirectPath(action.data)};
		case ERROR_MSG:
			return {...state,msg:action.msg};
		case LOADDATE:
			return {...state,msg:"",...action.data};
		case LOGIN_OUT:
			return {...initState,redirectTo:"/login"};
		default:
			return state;
	}
}

export function register({user,pwd,repeatpwd,name,idcardtype,idcardnum,email,phone,type}){
	if(!user||!pwd||!repeatpwd){
		return errorMsg("用户名和密码不可为空！");
	}
	
	if(!name){
		return errorMsg("姓名不可为空！");
	}
	
	if(!idcardnum){
		return errorMsg("证件号码不可为空！");
	}
	
	if(!phone){
		return errorMsg("手机号码不可为空！");
	}
	
	if(pwd!==repeatpwd){
		return errorMsg("两次密码输入不一致！");
	}
	
	return dispatch=>{
		axios.post("/user/register",{user,pwd,name,idcardtype,idcardnum,email,phone,type}).then((res)=>{
			if(res.status===200&&res.data.code===0){
				dispatch(authSuccess({user,name,idcardtype,idcardnum,email,phone,type}))
			}else{
				dispatch(errorMsg(res.data.msg));
			}
		})
	}
}


export function login({user,pwd}){
	if(!user||!pwd){
		return errorMsg("用户名和密码不可为空！");
	}
	
	return dispatch=>{
		axios.post("/user/login",{user,pwd}).then((res)=>{
			if(res.status===200&&res.data.code===0){
				dispatch(authSuccess(res.data.data))
			}else{
				dispatch(errorMsg(res.data.msg));
			}
		})
	}
}
