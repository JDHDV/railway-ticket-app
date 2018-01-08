import  axios from "axios"

const USER_LIST="获取用户列表";
const initState={
	userlist:[]
}

function userlist(data){
	return {type:USER_LIST,data}
}

export function chatuser(state=initState,action){
	switch(action.type){
		case USER_LIST:
			return {...state,userlist:action.data};
		default:
			return state;
	}
}

export function getUserList(type){
	return dispatch=>{
		axios.get("/user/list").then((res)=>{
			if(res.data.code===0){
				dispatch(userlist(res.data.data));
			}
		})
	}
}
