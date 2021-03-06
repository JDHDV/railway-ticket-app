import axios from "axios"

const SEARCH_SUCCESS="查询成功";
const ERROE_MSG="错误信息";
const SELECT_STATION="选择站点";
const ADD_STATION="添加到常用列表";

const initState={
	msg:"",
	train_no:"",
	train_type:"",
	start_station: "南宁东",
	end_station:"广州南",
	start_time:"",
	end_time:"",
	run_time:"",
	start_station_type:"",
	end_station_type:"",
	price_list: []
}

function searchSuccess(data){
	return {type:SEARCH_SUCCESS,data}
}

function errorMsg(data){
	return {type:ERROE_MSG,data}
}

function selectS(data){
	return {type:SELECT_STATION,data};
}

function addStation(data){
	return {type:ADD_STATION,data};
}

export function ticket(state=initState,action){
	switch(action.type){
		case SEARCH_SUCCESS:
			return {...state,...action.data,msg:action.msg};
		case ERROE_MSG:
			return {...state,...action.data,msg:action.msg};
		case SELECT_STATION:
			return {...state,...action.data};
		case ADD_STATION:
			return {...state,...action.data};
		default:
			return state;
	}
}

export function selectStartStationRedux(v){
	return dispatch=>{
		dispatch(selectS(v));
	}
}

export function addStationRedux(v){
	return dispatch=>{
		dispatch(addStation(v));
	}
}

export function ticketSearch(train_no,train_type,start_station,start_station_type,end_station,end_station_type,start_time,end_time,run_time,price_list,price_type,price){
	if(start_station===end_station){
		return errorMsg("始发站和终点站不可相同!");
	}
	
	return dispatch=>{
		console.log("111")
		axios.post("/ticket/searchresult",{train_no,train_type,start_station,start_station_type,end_station,end_station_type,start_time,end_time,run_time,price_list,price_type,price}).then((res)=>{
			
			if(res.status===200&&res.data.code===0){
				dispatch(searchSuccess(res.data.data));
			}else{
				dispatch(errorMsg(res.data.msg));
			}
		})
	}
}

